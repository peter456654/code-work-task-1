// pages/blog3.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog3 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "intro", title: "Introduction" },
    { id: "workmanager", title: "WorkManager" },
    { id: "workmanager-features", title: "WorkManager Features" },
    { id: "workmanager-use-cases", title: "WorkManager Use Cases" },
    { id: "workmanager-example", title: "WorkManager Example" },
    { id: "alarmmanager", title: "AlarmManager" },
    { id: "alarmmanager-features", title: "AlarmManager Features" },
    { id: "alarmmanager-example", title: "AlarmManager Example" },
    { id: "alarmmanager-limitations", title: "AlarmManager Limitations" },
    { id: "jobscheduler", title: "JobScheduler" },
    { id: "jobscheduler-features", title: "JobScheduler Features" },
    { id: "jobscheduler-example", title: "JobScheduler Example" },
    { id: "jobscheduler-limitations", title: "JobScheduler Limitations" },
    { id: "conclusion", title: "Conclusion" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-secondary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 flex gap-8">
        {/* LEFT SIDEBAR - TABLE OF CONTENTS */}
        <div className="hidden lg:block w-64 sticky top-24">
  <div className="bg-secondary backdrop-blur-sm rounded-xl border border-primary/60 p-6 shadow-glow max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
    <h3 className="text-lg font-bold text-primary mb-4 flex items-center sticky top-0 bg-secondary z-10 -mx-6 -mt-6 px-6 pt-6 pb-3">
      <FiList className="mr-2" />
      Table of Contents
    </h3>
    <nav className="space-y-2">
      {tocItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
            activeSection === item.id
              ? "bg-secondary/20 text-primary border-l-4 border-primary"
              : "text-primary/70 hover:text-primary hover:bg-secondary/5"
          }`}
        >
          {index + 1}. {item.title}
        </button>
      ))}
    </nav>
  </div>
</div>


        {/* MOBILE TOC TOGGLE */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="lg:hidden fixed top-24 left-4 z-50 bg-secondary text-primary p-3 rounded-full shadow-lg"
        >
          <FiList size={20} />
        </button>

        {/* MOBILE TOC OVERLAY */}
        {isTocOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-secondary/50" onClick={() => setIsTocOpen(false)}>
            <div className="bg-secondary w-80 h-full overflow-y-auto p-6 shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
                <FiList className="mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tocItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsTocOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-secondary/20 text-primary border-l-4 border-primary"
                        : "text-primary/70 hover:text-primary hover:bg-secondary/5"
                    }`}
                  >
                    {index + 1}. {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-4xl">
          {/* TITLE */}
          <h1 className="text-5xl md:text-5xl font-extrabold text-primary mb-8 drop-shadow-glow">
            WorkManager vs. AlarmManager vs. JobScheduler: A Detailed Guide
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-xl overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/18705.jpg"
              alt="Background Task Managers"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              C
            </div>
            <span className="uppercase tracking-wide font-semibold">Charles Raj Iruthayaraj</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>3 Mar 2025</span>
            </div>
          </div>

          {/* INTRO */}
          <section id="intro" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              This blog will explore <strong className="text-primary">WorkManager, AlarmManager, and JobScheduler</strong> in detail, comparing their functionality, ideal use cases, and examples.
            </p>
          </section>

          {/* SECTION 1 */}
          <section id="workmanager" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">1. WorkManager</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              WorkManager is the most modern and flexible background task manager in Android. It provides a high-level abstraction for tasks that need to run asynchronously, either immediately or on a schedule.
            </p>
          </section>

          {/* WorkManager Features */}
          <section id="workmanager-features" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Key Features of WorkManager:</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Guaranteed Execution</li>
              <li>Flexible Constraints</li>
              <li>Task Chaining</li>
              <li>Battery Efficient</li>
              <li>Support for Periodic Work</li>
              <li>Supports Work Across Device Reboots</li>
            </ul>
          </section>

          {/* WorkManager Use Cases */}
          <section id="workmanager-use-cases" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Use Cases for WorkManager:</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Syncing Data</li>
              <li>File Backups</li>
              <li>Periodic Maintenance</li>
            </ul>
          </section>

          {/* WorkManager Example */}
          <section id="workmanager-example" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Example Usage:</h3>
            <pre className="bg-gray-900 text-primary p-4 rounded-lg mb-10 overflow-auto text-sm border border-primary/40">
{`class SyncDataWorker(appContext: Context, workerParams: WorkerParameters) :
    Worker(appContext, workerParams) {
    override fun doWork(): Result {
        // Perform your task
        return Result.success()
    }
}


// One-time work
val syncDataRequest = OneTimeWorkRequestBuilder<SyncDataWorker>()
    .setConstraints(
        Constraints.Builder()
            .setRequiredNetworkType(NetworkType.UNMETERED)
            .setRequiresCharging(true)
            .build()
    ).build()
WorkManager.getInstance(context).enqueue(syncDataRequest)


// Periodic work
val periodicRequest = PeriodicWorkRequestBuilder<SyncDataWorker>(15, TimeUnit.MINUTES)
    .setConstraints(
        Constraints.Builder()
            .setRequiredNetworkType(NetworkType.UNMETERED)
            .setRequiresCharging(true)
            .build()
    ).build()
WorkManager.getInstance(context).enqueue(periodicRequest)`}
            </pre>
          </section>

          {/* SECTION 2 */}
          <section id="alarmmanager" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-6">2. AlarmManager</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              AlarmManager is best suited for time-based execution. It can wake the device to perform tasks even when it's idle.
            </p>
          </section>

          {/* AlarmManager Features */}
          <section id="alarmmanager-features" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Key Features:</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Time-based Execution</li>
              <li>Wakes up the Device</li>
              <li>Repeating and One-time Alarms</li>
              <li>Inexact vs. Exact Alarms</li>
            </ul>
          </section>

          {/* AlarmManager Example */}
          <section id="alarmmanager-example" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Example:</h3>
            <pre className="bg-gray-900 text-primary p-4 rounded-lg mb-10 overflow-auto text-sm border border-primary/40">
{`val alarmManager = getSystemService(Context.ALARM_SERVICE) as AlarmManager
val intent = Intent(this, MyReceiver::class.java)
val pendingIntent = PendingIntent.getBroadcast(this, 0, intent, 0)
val triggerTime = System.currentTimeMillis() + 10000
alarmManager.setExact(AlarmManager.RTC_WAKEUP, triggerTime, pendingIntent)


// Repeating
alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, triggerTime, 60000L, pendingIntent)`}
            </pre>
          </section>

          {/* AlarmManager Limitations */}
          <section id="alarmmanager-limitations" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Limitations:</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Battery Consumption</li>
              <li>Inflexibility</li>
              <li>Doze Mode Restrictions</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section id="jobscheduler" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-6">3. JobScheduler</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              JobScheduler offers a balance between flexibility and efficiency, designed for condition-based background work starting with Android 5.0.
            </p>
          </section>

          {/* JobScheduler Features */}
          <section id="jobscheduler-features" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Key Features:</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Condition-based Execution</li>
              <li>Persistence Across Reboots</li>
              <li>Battery Efficiency</li>
              <li>Job Chaining Support</li>
            </ul>
          </section>

          {/* JobScheduler Example */}
          <section id="jobscheduler-example" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Example:</h3>
            <pre className="bg-gray-900 text-primary p-4 rounded-lg mb-10 overflow-auto text-sm border border-primary/40">
{`class MyJobService : JobService() {
    override fun onStartJob(params: JobParameters?): Boolean {
        // Do your work
        return true
    }


    override fun onStopJob(params: JobParameters?): Boolean {
        return false
    }
}


val jobScheduler = getSystemService(Context.JOB_SCHEDULER_SERVICE) as JobScheduler
val jobInfo = JobInfo.Builder(1, ComponentName(this, MyJobService::class.java))
    .setRequiredNetworkType(JobInfo.NETWORK_TYPE_UNMETERED)
    .setRequiresCharging(true)
    .setPersisted(true)
    .build()
jobScheduler.schedule(jobInfo)`}
            </pre>
          </section>

          {/* JobScheduler Limitations */}
          <section id="jobscheduler-limitations" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">Limitations:</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Requires API 21+</li>
              <li>Not ideal for exact time-based tasks</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-primary mt-8 mb-6">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              <strong className="text-primary">WorkManager</strong> is the recommended tool for most modern use cases, especially when guaranteed execution is needed. <strong className="text-primary">AlarmManager</strong> is suitable for simple, time-based tasks but may consume more battery. <strong className="text-primary">JobScheduler</strong> is best for conditionally executed tasks.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px rgba(0, 0, 0, 0.18), 0 0 2px rgba(0, 0, 0, 0.15);
        }
        .shadow-glow {
          box-shadow: 0 0 32px rgba(0, 0, 0, 0.08), 0 0 8px rgba(0, 0, 0, 0.12);
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </div>
  );
};

export default Blog3;
