

const records = [
  {
    id: 1,
    title: "Students Graduated",
    value: "1,500+",
    description: "Over the past academic year"
  },
  {
    id: 2,
    title: "Awards Won",
    value: "10+",
    description: "In academics, sports & arts"
  },
  {
    id: 3,
    title: "Competitions Won",
    value: "20+",
    description: "Regional and national levels"
  },
  {
    id: 4,
    title: "Clubs & Societies",
    value: "15",
    description: "For student engagement & growth"
  }
]

export default function Records() {
  return (
    <div className="w-[80%] z-2 rounded-xl bg-background shadow-2xl p-5 sm:p-8 md:p-10 absolute top-[90%] right-1/2 translate-x-1/2 border">
      {/* <h2 className="text-xl font-fancy font-bold mb-8 text-center text-primary">School Achievements</h2> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
        {records.map((record) => (
          <div
            key={record.id}
            className="space-y-1 text-center border-secondary transition-shadow"
          >
            <p className="text-3xl font-extrabold text-secondary">{record.value}</p>
            <h3 className="text-primary text-xs font-semibold">{record.title}</h3>
            
            <p className="text-muted-foreground text-xs">{record.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}