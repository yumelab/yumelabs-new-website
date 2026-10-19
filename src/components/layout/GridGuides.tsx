/** Fixed hairline column guides behind the page content. */
const GridGuides = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    <div className="container-site h-full">
      <div className="grid h-full grid-cols-2 border-x border-line-faint lg:grid-cols-4">
        <div className="border-r border-line-faint" />
        <div className="hidden border-r border-line-faint lg:block" />
        <div className="hidden border-r border-line-faint lg:block" />
      </div>
    </div>
  </div>
);

export default GridGuides;
