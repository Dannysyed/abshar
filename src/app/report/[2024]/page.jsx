import React from "react";
import Image from "next/image";
import education1 from "../../../../public/reportImages/education/99.jpg";
import education2 from "../../../../public/reportImages/education/100.jpg";
import education3 from "../../../../public/reportImages/education/101.jpg";
import food1 from "../../../../public/reportImages/food/5.jpg";
import food2 from "../../../../public/reportImages/food/6.jpg";
import youth1 from "../../../../public/reportImages/youth/acc.jpg";
import youth2 from "../../../../public/reportImages/youth/acc1.jpg";
import youth3 from "../../../../public/reportImages/youth/acc2.jpg";

import rural1 from "../../../../public/reportImages/Rural/11.jpg";
import rural2 from "../../../../public/reportImages/Rural/12.jpg";
import rural3 from "../../../../public/reportImages/Rural/13.jpg";

const ReportPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header
        className="text-center mb-12 py-8"
        style={{ backgroundColor: "#16984c", color: "#fff" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Abshar – Source of Humanity
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mt-4">
          Progress REPORT 2021-24
        </h2>
      </header>

      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 shadow-md rounded-lg mb-12">
        <h3
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: "#16984c" }}
        >
          Education & Literacy
        </h3>
        <p className="text-base md:text-lg mb-6">
          Recognizing the importance of education as a cornerstone for social
          and economic development, Abshar Trust has focused extensively on
          supporting the educational needs of underprivileged students in some
          areas of District Baramulla. Our educational initiatives are designed
          to ensure that every child has access to quality education and the
          resources necessary to thrive academically. Our initiatives include:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2 text-base md:text-lg mb-6">
          <li>
            <strong>Stationery Supplies:</strong> Abshar Trust has provided a
            wide range of stationery items, including notebooks, supporting
            books, pencils, pens, erasers, rulers, and drawing supplies. These
            basic yet crucial items help students perform daily academic tasks
            efficiently.
          </li>
          <li>
            <strong>Shoes and Socks:</strong> We have distributed high-quality
            shoes and socks to ensure that students can attend school
            comfortably and confidently. Proper footwear is essential for
            students' overall health and well-being, and it also contributes to
            maintaining school dress codes.
          </li>
          <li>
            <strong>Ties and Scarves:</strong> As part of our uniform
            distribution, we have provided ties and scarves to some students.
            These items, often considered minor, play a vital role in ensuring
            that students feel a sense of belonging and equality within their
            school environment.
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full h-64">
            <Image
              src={education1}
              alt="Stationery distribution"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={education2}
              alt="Shoes distribution"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={education3}
              alt="Uniform distribution"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 shadow-md rounded-lg mb-12">
        <h3
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: "#16984c" }}
        >
          Food Security & Poverty Alleviation
        </h3>
        <p className="text-base md:text-lg mb-6">
          Ensuring food security for the poor and vulnerable is one of the
          primary objectives of Abshar Trust. Our food distribution programs
          have made a significant impact on the lives of many families in
          Baramulla:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2 text-base md:text-lg mb-6">
          <li>
            <strong>Food Drives:</strong> We organize special day (festivals)
            food drives to distribute essential food items such as rice, wheat,
            pulses, cooking oil, and other staples to impoverished families.
            These drives have provided much-needed relief to households
            struggling with food insecurity.
          </li>
          <li>
            <strong>Emergency Food Assistance:</strong> During times of crisis,
            such as natural disasters or economic downturns, Abshar Trust has
            swiftly mobilized resources to provide emergency food assistance,
            medicine, etc. This rapid response has been crucial in preventing
            hunger and malnutrition among the most vulnerable.
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-64">
            <Image
              src={food1}
              alt="Food distribution"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={food2}
              alt="Emergency food assistance"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 shadow-md rounded-lg mb-12">
        <h3
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: "#16984c" }}
        >
          Rural Development & Environmental Sustainability
        </h3>
        <p className="text-base md:text-lg mb-6">
          Abshar Trust is committed to promoting rural development,
          environmental sustainability, and fostering a green and clean
          Baramulla. Our environmental initiatives include:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2 text-base md:text-lg mb-6">
          <li>
            <strong>Tree Plantation Drives:</strong> We have conducted several
            tree plantation drives in community spaces. These efforts aim to
            increase green cover, improve air quality, and create awareness
            about the importance of trees in combating climate change.
          </li>
          <li>
            <strong>Cleanliness Campaigns:</strong> The Trust has organized
            cleanliness drives to remove litter and waste from public spaces. By
            involving local communities, we have instilled a sense of
            responsibility and ownership towards maintaining a clean and healthy
            environment.
          </li>
          <li>
            <strong>Awareness Programs:</strong> We conduct FGDs on
            environmental issues such as waste management, recycling, and water
            conservation. These programs educate the public, especially the
            youth, on sustainable practices and encourage them to adopt
            eco-friendly habits.
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full h-64">
            <Image
              src={rural1}
              alt="Tree plantation"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={rural2}
              alt="Cleanliness campaign"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={rural3}
              alt="Awareness program"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 shadow-md rounded-lg mb-12">
        <h3
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: "#16984c" }}
        >
          Youth Affairs
        </h3>
        <p className="text-base md:text-lg mb-6">
          Abshar Trust believes in the power of sports to inspire, motivate, and
          develop the potential of young people. Our sports initiatives aim to
          provide opportunities for youth engagement, skill development, and
          community building:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2 text-base md:text-lg mb-6">
          <li>
            <strong>Sports Equipment Distribution:</strong> We have provided
            sports equipment, including cricket kits, football jerseys to youth
            clubs. This has enabled young people to participate in various
            sports and develop their talents.
          </li>
          <li>
            <strong>Organizing Sports Tournaments:</strong> The Trust has
            organized local sports tournaments to encourage healthy competition
            and team spirit among the youth. These events have not only provided
            a platform for showcasing talent but also fostered a sense of unity
            and camaraderie.
          </li>
          <li>
            <strong>Coaching and Training Programs:</strong> We have initiated
            coaching and training programs to help young athletes to enhance
            their skills and achieve their full potential. Experienced coaches
            and trainers work with aspiring sportspeople to improve their
            performance and prepare them for higher-level competitions.
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full h-64">
            <Image
              src={youth1}
              alt="Sports equipment distribution"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={youth2}
              alt="Sports tournament"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src={youth3}
              alt="Coaching and training"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 text-center mb-12">
        <h3
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: "#16984c" }}
        >
          Conclusion
        </h3>
        <p className="text-base md:text-lg">
          Abshar Trust has made significant strides in addressing the needs of
          marginalized communities in District Baramulla. Through our efforts in
          education, food security, environmental sustainability, and youth
          development, we have positively impacted the lives of many individuals
          and families. As we continue to grow and expand our initiatives, we
          remain committed to our mission of empowering the underserved and
          creating a brighter future for all.
        </p>
        <p className="text-base md:text-lg mt-4">
          Together, with the support of our donors, volunteers, and partners,
          Abshar Trust will continue to serve as a beacon of hope and a source
          of humanity for those in need.
        </p>
      </section>
    </div>
  );
};

export default ReportPage;
