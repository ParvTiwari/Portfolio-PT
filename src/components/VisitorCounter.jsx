"use client";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visits")
      .then(res => res.json())
      .then(data => setCount(data.visitors));
  }, []);

  // return (
  //   <div className="flex items-center gap-2 text-slate-400 text-sm">
  //     <FaEye className="text-teal-400" />
  //     <span className="tracking-wide">
  //       {count ? `${count.toLocaleString()} Visitors` : "Loading..."}
  //     </span>
  //   </div>
  // );
  return (<></>);
}