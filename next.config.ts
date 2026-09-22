import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/apply-company.html", destination: "/apply-company", permanent: true },
      { source: "/apply-software-developer.html", destination: "/apply-software-developer", permanent: true },
      { source: "/apply-digital-marketing.html", destination: "/apply-digital-marketing", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      {
        source: "/hire-student-software-developers-in-san-francisco.html",
        destination: "/hire-student-software-developers-in-san-francisco",
        permanent: true,
      },
      {
        source: "/hire-student-software-developers-in-new-york.html",
        destination: "/hire-student-software-developers-in-new-york",
        permanent: true,
      },
      {
        source: "/student-digital-marketing-freelancers-in-austin.html",
        destination: "/student-digital-marketing-freelancers-in-austin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
