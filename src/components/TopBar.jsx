export default function TopBar() {
  return (
    <div className="bg-[#111] text-white/75 text-xs py-2 px-8 flex justify-between items-center gap-3 flex-wrap">
      <span>
        <i className="fas fa-map-marker-alt text-primary mr-1.5"></i>
        123 Wellness Ave, New York, NY 10001
      </span>
      <span>
        <i className="fas fa-clock text-primary mr-1.5"></i>
        Mon–Fri 9am–7pm &nbsp;|&nbsp; Sat 10am–5pm
      </span>
    </div>
  )
}
