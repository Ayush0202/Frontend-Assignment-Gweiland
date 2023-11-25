import Link from "next/link";

export default function TopAnnouncement() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e0c200",
          color: "black",
        }}
      >
        <Link
          href="/"
          style={{
            padding: "14px 0px",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          VISIT US ON TIKTOK @BRAVELAND.COM
        </Link>
      </div>
    </>
  );
}
