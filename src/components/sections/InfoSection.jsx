export const InfoSection = () => {
  return (
    <section className="flex flex-col pl-72 pt-16 flex-1 gap-5">
      <h1 className="text-4xl font-semibold flex flex-col uppercase">
        <span className="text-green-700">Kim</span> Fransson
      </h1>
      <div>
        <h2 className="font-semibold mb-3">
          Fullstack Developer &#x2022; Malmö{" "}
        </h2>
        <p className="text-sm">
          High accomplishment and user-focused Fullstack Developer adept in
          collaborating with UX and design teams to plan the technical writing
          and execution of functional specifications for websites and
          applications
        </p>
      </div>

      <div>
        <h2 className="font-semibold mb-3">Working with technologies:</h2>
        <ul className="text-sm flex flex-col gap-3 list-disc list-inside pl-1">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>GraphQl</li>
        </ul>
      </div>
    </section>
  );
};
