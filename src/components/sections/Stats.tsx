import { stats } from "@/data/site";

/** Columns match the GridGuides columns, so the guide lines act as dividers. */
const Stats = () => (
  <section className="border-b border-line">
    <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col gap-2 px-4 py-10 sm:px-6 sm:py-14 ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
        >
          <dt className="order-2 text-sm text-muted">{stat.label}</dt>
          <dd className="text-4xl font-medium tracking-heading sm:text-5xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Stats;
