// components/WhoWeAre.js
import React from "react";

const dbms = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 leading-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Database Management System
            </p>
          </div>

          <div className="mt-10">
            <div className="flex justify-center items-center md:flex-row md:space-x-8">
              <div className="mb-4 md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg"
                  src="/assets/dbms.jpg"
                  alt="Text 1"
                />
              </div>
              {/* <div className="md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg mb-6"
                  src="/assets/wrw2.jpg"
                  alt="Text 1"
                />
              </div> */}
            </div>
            {/* <h1 className="text-3xl font-bold flex justify-center m-8 text-black sm:text-2xl md:text-3xl lg:text-4xl">
              About MindMosaic
            </h1> */}

            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-black">
                  Introduction
                </h2>
                <p className="text-gray-600">
                  Introduction A modern DBMS is more realistic which makes the
                  process easier in retrieving, manipulating, and producing
                  information. In the conventional method, data has been
                  arranged in a file and all the research helped to overcome the
                  lack in the traditional system of data management. Thus, the
                  modern database system is associated with following the basic
                  rules of normalization by storing metadata. The study will
                  evaluate the process by which the database has made the
                  evolution from a desktop system to a modern DBMS system by
                  demonstrating the reason. In addition, the study will analyze
                  the alternative data warehouse and business intelligence
                  architecture and also the modern approaches. <br /> <br />{" "}
                  <span className="text-black font-semibold">
                    How Database Management Systems (DBMS) have evolved over the
                    years (L1 and L5)
                  </span>{" "}
                  <br /> The traditional database system has evolved from a
                  file-based system to a database approach. In other words, it
                  has evolved from a simple record-oriented navigational
                  database system to a relational database system that is
                  object-oriented and supports multimedia. In the 1960s, fiat
                  file-based systems helped to store information in a single
                  file and every line consisted of one record where the field
                  had a fixed length or it had a separation from tabs, commas,
                  and whitespace (Poltavtseva, 2019). <br /> <br /> If one
                  record is misplaced or deleted from the flat file database,
                  then all the data from different files has to be omitted
                  manually, which makes for inefficient data manipulation. In
                  addition, the princess was very time-consuming and it also
                  wasted the space of a computer. <br /> <br /> In the 1970s' a
                  hierarchical model of the database was introduced that
                  contained data in a hierarchical manner. It was visualized as
                  a family tree that indicated the parent-child relationship. In
                  this system, parents can have many children but each child has
                  only one parent. Additionally, it contains segments that are
                  similar to the file record system and the main entity was
                  formed in a table. In this process, the speed of accessing
                  information was relatively fast and it also increased the
                  level of performance of data. On the other hand, this model
                  lacks flexibility, and maintenance of this kind of database
                  was difficult In the late 80s,' Charles Bachmann invented a
                  network model which ensured the allowing of multiple parent
                  and child relationships which indicated a graph structure
                  (Anwar et al., 2020). <br /> <br />
                  It is an undeniable fact that it has improved the performance
                  of databases and it helps to represent complicated data in a
                  simpler form. It has ensured data model integrity and it also
                  ensures data independence. However, it has a deficiency of
                  structural independence and for this reason, a user-friendly
                  database management system could not be built. At the present,
                  the relational database model has been introduced by E.F. Codd
                  which is associated with allowing the entities which are
                  involved in a common attribute (Cao, 2021). The main benefit
                  of using relational databases is that data can be stored in a
                  small table and the property of the database is flexible. The
                  languages that are used in relational database models are
                  human-readable and it ensures a security control that also
                  imposes a control of authentication (Liu et al., 2018).
                  <br /> <br />
                  Another modern database is the object-oriented database model
                  where information is stored as an object and object-oriented
                  programming languages. In this process, the navigation of data
                  is easier and it allows complexity. Thus, it can be stated
                  that the main reason for the evolution of data is the
                  increment in data performance, more flexibility, complex data
                  stores, increment in data efficiency, increment in speed, and
                  saving time. <br /> <br />
                  <span className="text-black font-semibold">
                    Describe a DBMS system used for Transactional Processing
                    (L2)
                  </span>{" "}
                  <br />
                  DBMS transaction processing refers to logical techniques of
                  processing units that include collections of databases that
                  access the operations. It has been noticed that in DBMS, all
                  types of databases are associated with accessing the operation
                  and launching and finishing statements of transactions that
                  can be measured in a simple logical transaction (Groomer &
                  Murthy, 2018). At the time of this transaction on the server,
                  the database can be inconsistent. It indicates the database
                  has been structured to optimize the performance of the process
                  of the transaction. It has been noticed that relational
                  databases have become one of the main data management
                  technologies despite big data analytics and NoSQL. <br />{" "}
                  <br /> DBMS is capable of updating, storing, and querying
                  large tables. It also manages query structured data. However,
                  the main challenge is associated with analyzing large data
                  efficiently. Many researchers have proposed many efficient
                  algorithms. Data mining is focused on discovering knowledge
                  presented by models and patterns in a large database. DBMS has
                  become addressed as a recent technology that is used in data
                  mining in large datasets on the basis of automatic data
                  parallelism. It is also engaged in processing transactions and
                  SQL queries on the relational table. <br /> <br /> In DBMS,
                  transaction processing intends to conserve database integrity.
                  In the IT infrastructure and database management, there are
                  common database problems that can make a huge difference and
                  make disruption while managing information. In the present
                  context, the Oracle database is addressed as a multi-model
                  database management system that is used in online transaction
                  processing, data warehousing, and database workload. After the
                  basic configuration, the whole database system conducts its
                  process automatically. Thus, the main problem can occur at the
                  time of configuration. <br /> <br /> In terms of managing the
                  Oracle database management system, the database should be
                  enabled with Oracle database QoS and it must enable the access
                  of APPQOSSYS. After selecting the "Enable Quality of Service
                  Management'' in the cloud control option, it reduces the issue
                  of databases (Oracle, 2022). It is important at the time of
                  implementation to ensure the usage of a particular resource
                  plan that can help in moving the performance classes. If the
                  resource plan is not enabled, it might provide error results
                  in the database. Another important aspect is an unmanageable
                  server pool when the oracle database cannot be able in
                  predicting or measuring data performance classes. This
                  database measures the basic ability of an organization to
                  deliver its service, Thus, if one database performs not well,
                  it would automatically reduce the performance of dependent
                  data. Thus, it requires to be resilient, frequently backed up,
                  and reviewed in a continuous manner to identify the potential
                  hazards that can slow down the intrastate. Every business
                  needs to focus on increasing its security, the nature of data
                  storage and an option of analytics increases the complexity.
                  Since there are many options like columnar databases,
                  relational databases, and object-oriented databases, it has
                  become difficult to evaluate and select the right solution. It
                  has been noticed that the software that has been used in the
                  computer has limitations of scalability and usage of
                  resources. <br />
                  <br /> At the present, enterprises are focused on processing
                  the transaction capacity by knowing the components of
                  cataloging, and the architecture of the database that affects
                  the whole level of scalability (Wang & Kogan, 2018). Databases
                  have been identified as one of the most hidden factors of a
                  company that needs high focus security. The risk of a data
                  breach can cost a company an average of $ 4 million and also
                  it can lead to a loss of reputation. In the decentralized
                  database management system, the challenges of distribution
                  pose the chance of lacking centralized knowledge of the whole
                  database. <br />
                  <br />
                  <span className="text-black font-semibold">
                    Discuss the architecture of a Data Warehouse and its
                    alternative options (L4)
                  </span>{" "}
                  <br />A data warehouse architecture refers to the procedure of
                  describing the whole architecture of processing data
                  communication and presentation for end-cloud computing. <br /> <br />
                </p>
                <div className="mb-4 md:w-full ">
                  <img
                    className="object-fit object-center w-full h-[500px] rounded-lg shadow-lg"
                    src="/assets/datawarehouse.jpg"
                    alt="Text 1"
                  />
                </div>
               
                {/*  */}
                <p className="text-black font-semibold">
                  Figure : Data warehouse architecture with a staging area and
                  Data Mart
                </p>{" "}
               
                <p>
                  In a basic data architecture, an operational system is used in
                  the data warehouse that processes day-to-day transactions. A
                  flat file system stores transactional data. Metadata provides
                  information about other data. The area of the data warehouse
                  is engaged in saving highly and lightly processed data.
                </p>
                <div className="mb-4 md:w-full ">
                  <img
                    className="object-fit object-center w-full h-[500px] rounded-lg shadow-lg"
                    src="/assets/d1.jpg"
                    alt="Text 1"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h2 className=" font-semibold text-black pb-2 ">
                  Conclusion
                </h2>
                <div className="text-gray-600">
                  {/* 1 */}
                  <p className="text-sm text-black ">
                    From the above study, it can be concluded that the DBMS has
                    evolved from flat files to relational database management
                    systems and object-oriented database management systems.
                    DBMS can efficiently process the transaction and increase
                    the performance of the business. However, it poses various
                    challenges like data securing issues, and data breach
                    issues. Moreover, the study has highlighted the architecture
                    of data warehouses.
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-black pb-2 ">
                  Reference
                </h2>
                <div className="text-gray-600">
                  {/* 1 */}
                  <p className="text-xs text-black ">
                    Anwar, A., Mahmood, A., Ray, B., Mahmud, M.A. & Tari, Z.,
                    (2020). Machine learning to ensure data integrity in power
                    system topological network database. Electronics, 9(4),
                    p.693. Retrieved on 11th July, From:
                    https://www.mdpi.com/699902 <br /> <br />
                    Armbrust, M., Ghodsi, A., Xin, R. & Zaharia, M., (2021),
                    January. Lakehouse: a new generation of open platforms that
                    unify data warehousing and advanced analytics. In
                    Proceedings of CIDR. Retrieved 11 July 2022, from:
                    https://eva.fing.edu.uy/pluginfile.php/338191/mod_resource/content/1/cidr2021_lakehouse.pdf{" "}
                    <br /> <br />
                    Behbahani Nejad, M.R. & Rashidi, H., (2022). A Novel
                    Architecture based on Business Intelligence Approach to
                    Exploit Big Data. Journal of Electrical and Computer
                    Engineering Innovations (JECEI). Retrieved 11 July 2022,
                    from: https://jecei.sru.ac.ir/article_1727.html <br />
                    <br />
                    Bhatia, P.,(2019). Data mining and data warehousing:
                    principles and practical techniques. Cambridge University
                    Press.Retrieved 11 July 2022, from:
                    https://ieeexplore.ieee.org/abstract/document/8622206/
                    https://www.javatpoint.com/data-warehouse-architecture#:~:text=A%20data%20warehouse{" "}
                    <br />
                    <br />
                    Liu, Z.H., Lu, J., Gawlick, D., Helskyaho, H., Pogossiants,
                    G. & Wu, Z., (2018). Multi-model database management
                    systems-a look forward. In Heterogeneous Data Management,
                    Polystores, and Analytics for Healthcare (pp. 16-29).
                    Springer, Retrieved on 11th July, From
                    Cham.https://helda.helsinki.fi/bitstream/handle/10138/314140/Poly_3_.pdf?sequence=1{" "}
                    <br />
                    <br />
                    Lopes, J., Guimarães, T., & Santos, M. F. (2020). Adaptive
                    business intelligence: A new architectural approach.
                    Procedia Computer Science, 177, 540-545. Retrieved 11 July
                    2022, from
                    https://www.sciencedirect.com/science/article/pii/S1877050920323450/pdf?md5=b05c5df5831580932f57394d375f3d65&pid=1-s2.0-S1877050920323450-main.pdf{" "}
                    <br />
                    <br />
                    Poltavtseva, M.A., (2019), March. Evolution of data
                    management systems and their security. In 2019 International
                    Conference on Engineering Technologies and Computer Science
                    (EnT) (pp. 25-29). IEEE. Retrieved on 11th July, From:
                    https://ieeexplore.ieee.org/abstract/document/8711971/{" "}
                    <br />
                    <br />
                    Roth, J. A., Goebel, N., Sakoparnig, T., Neubauer, S.,
                    Kuenzel-Pawlik, E., Gerber, M., ... & PATREC Study Group
                    Abshagen Christian Fucile Geoffrey Gerber Martin Goebel
                    Nicole Hug Balthasar L Jaegle Bernd Kuenzel-Pawlik Eleonore
                    Neubauer Simon Padiyath Rakesh Roth Jan A Sakoparnig Thomas
                    Sengstag Thierry Spyra Damian Widmer Andreas F. (2018).
                    Secondary use of routine data in hospitals: description of a
                    scalable analytical platform based on a business
                    intelligence system. JAMIA open, 1(2), 172-177. Retrieved 11
                    July 2022, from:
                    https://ieeexplore.ieee.org/abstract/document/9071769/ br{" "}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dbms;


