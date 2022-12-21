import { useState } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import Icon from '@/components/icon';
import Map from '@/components/map';

import content from '@/content/schedule';
import styles from '@/styles/schedule.module.scss';

export default function Schedule() {
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
                <h1>Schedule an appointment</h1>
                <a className="btn secondary icon" href="tel:+16616176160">
                  <Icon type="phone" />(661) 617-6160
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-12">
            <div className="col-12 col-lg-6 content mb-12 mb-lg-0">
              <form className={cn('text-left', styles.form)}>
                <h2>Schedule now</h2>
                <p>Find a time that works for you and we&apos;ll follow up through email to finalize your appointment.</p>
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <label>Phone</label>
                <input type="text" />
                <label>Date</label>
                <input type="date" />
                <label>Time</label>
                <select>
                  <option value="9:00">9:00 AM</option>
                  <option value="9:30">9:30 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="14:30">2:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                </select>
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
