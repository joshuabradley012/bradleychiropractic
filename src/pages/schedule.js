import { useState } from 'react';
import Head from 'next/head';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from 'classnames';
import { scheduleSchema } from "@/lib/validation";

import Icon from '@/components/icon';
import Map from '@/components/map';

import content from '@/content/schedule';
import styles from '@/styles/schedule.module.scss';

export default function Schedule() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheduleSchema),
  });

  async function submit(data) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
      </Head>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="content text-left text-lg-center">
                <h1>Schedule an appointment.</h1>
                <a className="btn secondary icon" href="tel:+16616176160">
                  <Icon type="phone" />(661) 617-6160
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-12">
            <div className="col-12 col-lg-6 content mb-12 mb-lg-0">
              <form className={cn('text-left', styles.form)} onSubmit={handleSubmit(submit)}>
                <h2>Schedule Here</h2>
                <p>Find a time that works for you and we&apos;ll follow up through email to finalize your appointment. Or give us a call using the number above.</p>
                <label>Name*</label>
                <input
                  {...register('name')}
                  type="text"
                  className={cn({
                    [styles.inputError]: !!errors.name?.message,
                  })}
                />
                {!!errors.name?.message && <p className={styles.inputErrorMessage}>{errors.name?.message}</p>}
                <label>Email*</label>
                <input
                  {...register('email')}
                  type="text"
                  className={cn({
                    [styles.inputError]: !!errors.email?.message,
                  })}
                />
                {!!errors.email?.message && <p className={styles.inputErrorMessage}>{errors.email?.message}</p>}
                <label>Phone*</label>
                <input
                  {...register('phone')}
                  type="text"
                  className={cn({
                    [styles.inputError]: !!errors.phone?.message,
                  })}
                />
                {!!errors.phone?.message && <p className={styles.inputErrorMessage}>{errors.phone?.message}</p>}
                <label>Date*</label>
                <input
                  {...register('date')}
                  type="date"
                  className={cn({
                    [styles.inputError]: !!errors.date?.message,
                  })}
                />
                {!!errors.date?.message && <p className={styles.inputErrorMessage}>{errors.date?.message}</p>}
                <label>Time*</label>
                <select
                  {...register('time')}
                  defaultValue=""
                  className={cn({
                    [styles.inputError]: !!errors.time?.message,
                  })}
                >
                  <option value="" disabled hidden>Select a time</option>
                  <option value="9:00AM">9:00 AM</option>
                  <option value="9:30AM">9:30 AM</option>
                  <option value="10:00AM">10:00 AM</option>
                  <option value="10:30AM">10:30 AM</option>
                  <option value="11:00AM">11:00 AM</option>
                  <option value="11:30AM">11:30 AM</option>
                  <option value="12:00PM">12:00 PM</option>
                  <option value="12:30PM">12:30 PM</option>
                  <option value="1:00PM">1:00 PM</option>
                  <option value="1:30PM">1:30 PM</option>
                  <option value="2:00PM">2:00 PM</option>
                  <option value="2:30PM">2:30 PM</option>
                  <option value="3:00PM">3:00 PM</option>
                  <option value="3:30PM">3:30 PM</option>
                  <option value="4:00PM">4:00 PM</option>
                  <option value="4:30PM">4:30 PM</option>
                  <option value="5:00PM">5:00 PM</option>
                  <option value="5:30PM">5:30 PM</option>
                </select>
                {!!errors.time?.message && <p className={styles.inputErrorMessage}>{errors.time?.message}</p>}
                <label>Message (optional)</label>
                <textarea
                  {...register('message')}
                  rows="4"
                  className={cn({
                    [styles.inputError]: !!errors.message?.message,
                  })}
                />
                {!!errors.message?.message && <p className={styles.inputErrorMessage}>{errors.message?.message}</p>}
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-12 col-lg-6 content">
              <Map />
              <h3>Office Hours</h3>
              <p>9AM - 6PM, Monday - Thursday <br />9AM - 12PM, Friday</p>
              <h3>Address</h3>
              <p>5001 Stockdale Hwy, <br />Bakersfield, CA 93309</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
