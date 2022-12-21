import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from 'classnames';
import { subscriberSchema } from "@/lib/validation";

import styles from '@/styles/subscribe-form.module.scss';

const subscribe = {
  headline: 'Become a subscriber today!',
  caption: 'Sign up to receive our newsletter where we share tips, special offers, and our latest content. We are dedicated to helping you achieve better health.',
};

export default function SubscribeForm() {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscriberSchema),
  });

  useEffect(() => {
    const subscription = watch(() => {
      setMessage("");
      setErrorMessage("");
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function submit(data) {
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.status === 200) {
        setMessage(json.message);
        setErrorMessage("");
      } else {
        setMessage("");
        setErrorMessage(json.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="section blue">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 content-col">
            <div className="content text-left text-lg-center">
              <h2>{subscribe.headline}</h2>
              <p>{subscribe.caption}</p>
              <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <div className={styles.inputWrapper}>
                  <input
                    {...register('email')}
                    className={cn(styles.input, {
                      [styles.inputSuccess]: message,
                      [styles.inputError]: !!errors.email?.message || !!errorMessage,
                    })}
                    type="text"
                    placeholder="Email"
                  />
                  {!!message && <p className={styles.inputMessage}>{message}</p>}
                  {!!errorMessage && <p className={styles.inputErrorMessage}>{errorMessage}</p>}
                  {!!errors.email?.message && <p className={styles.inputErrorMessage}>{errors.email?.message}</p>}
                </div>
                <button className={cn("secondary", styles.submitButton)} type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
