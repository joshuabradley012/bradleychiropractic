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
import useScript from '@/hooks/useScript';

export default function Schedule() {
  const formRef = useScript(
    'https://cdn.reviewwave.com/js/reviewwave.js',
    '80008127b3f29ff3483a8ec3377502ef6ec2',
    true
  );
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    try {
      if (submitted) return;
      setSubmitted(true);
      const res = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.status === 200) {
        setMessage(json.message);
        setErrorMessage('');
        setSubmitted(true);
      } else {
        setMessage('');
        setErrorMessage(json.message);
        setSubmitted(false);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(false);
    }
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
            <div className="col-12 col-lg-6 content mb-12 mb-lg-0" ref={formRef}/>
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
