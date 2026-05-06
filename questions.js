const MODULES = [
  {
    id: "module-1",
    title: "Module 1 – Introduction to Networks",
    questions: [
      {
        id: "m1-q1",
        type: "single",
        question: "Which of the following is the name for all computers connected to a network that participate directly in network communication?",
        answers: ["servers", "intermediary devices", "hosts", "media"],
        correct: ["hosts"]
      },
      {
        id: "m1-q2",
        type: "single",
        question: "When data is encoded as pulses of light, which media is being used to transmit the data?",
        answers: ["wireless", "Fiber-optic cable", "copper cable"],
        correct: ["Fiber-optic cable"]
      },
      {
        id: "m1-q3",
        type: "multi",
        question: "Which two devices are intermediary devices? (Choose two)",
        answers: ["hosts", "routers", "servers", "switches"],
        correct: ["routers", "switches"]
      },
      {
        id: "m1-q4",
        type: "single",
        question: "Which connection physically connects the end device to the network?",
        answers: ["Port", "NIC", "Interface"],
        correct: ["NIC"]
      },
      {
        id: "m1-q5",
        type: "single",
        question: "Which connections are specialized ports on a networking device that connect to individual networks?",
        answers: ["Port", "NIC", "Interface"],
        correct: ["Interface"]
      },
      {
        id: "m1-q6",
        type: "single",
        question: "Which type of network topology lets you see which end devices are connected to which intermediary devices and what media is being used?",
        answers: ["Physical topology", "Logical topology"],
        correct: ["Logical topology"]
      },
      {
        id: "m1-q7",
        type: "single",
        question: "Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
        answers: ["Physical topology", "Logical topology"],
        correct: ["Physical topology"]
      },
      {
        id: "m1-q8",
        type: "single",
        question: "Which network infrastructure provides access to users and end devices in a small geographical area, typically a department, home, or small business?",
        answers: ["Extranet", "Intranet", "LAN", "WAN"],
        correct: ["LAN"]
      },
      {
        id: "m1-q9",
        type: "single",
        question: "Which network infrastructure might an organization use to provide secure access to individuals from a different organization who require access to the organization's data?",
        answers: ["Extranet", "Intranet", "LAN", "WAN"],
        correct: ["Extranet"]
      },
      {
        id: "m1-q10",
        type: "single",
        question: "Which network infrastructure provides access to other networks over a large geographical area, often owned by a telecommunications service provider?",
        answers: ["Extranet", "Intranet", "LAN", "WAN"],
        correct: ["WAN"]
      },
      {
        id: "m1-q11",
        type: "single",
        question: "When designers follow accepted standards and protocols, which of the four basic characteristics of network architecture is achieved?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["Scalability"]
      },
      {
        id: "m1-q12",
        type: "single",
        question: "Confidentiality, integrity, and availability are requirements of which of the four basic characteristics of network architecture?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["Security"]
      },
      {
        id: "m1-q13",
        type: "single",
        question: "With which type of policy can a router manage the flow of data and voice traffic, giving priority to voice communications if the network experiences congestion?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["QoS"]
      },
      {
        id: "m1-q14",
        type: "single",
        question: "Having multiple paths to a destination is known as redundancy. This is an example of which characteristic of network architecture?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["fault tolerance"]
      },
      {
        id: "m1-q15",
        type: "single",
        question: "Which feature is a good conferencing tool to use with others located elsewhere in your city, or even in another country?",
        answers: ["BYOD", "Video communications", "Cloud computing"],
        correct: ["Video communications"]
      },
      {
        id: "m1-q16",
        type: "single",
        question: "Which feature describes using personal tools to access information and communicate across a business or campus network?",
        answers: ["BYOD", "Video communications", "Cloud computing"],
        correct: ["BYOD"]
      },
      {
        id: "m1-q17",
        type: "single",
        question: "Which feature contains options such as Public, Private, Custom and Hybrid?",
        answers: ["BYOD", "Video communications", "Cloud computing"],
        correct: ["Cloud computing"]
      },
      {
        id: "m1-q18",
        type: "single",
        question: "Which feature is being used when connecting a device to the network using an electrical outlet?",
        answers: ["Smart home technology", "Powerline", "Wireless broadband"],
        correct: ["Powerline"]
      },
      {
        id: "m1-q19",
        type: "single",
        question: "Which feature uses the same cellular technology as a smart phone?",
        answers: ["Smart home technology", "Powerline", "Wireless broadband"],
        correct: ["Wireless broadband"]
      },
      {
        id: "m1-q20",
        type: "single",
        question: "Which attack slows down or crashes equipment and programs?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Denial of Service (DoS)"]
      },
      {
        id: "m1-q21",
        type: "single",
        question: "Which option creates a secure connection for remote workers?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Virtual Private Network (VPN)"]
      },
      {
        id: "m1-q22",
        type: "single",
        question: "Which option blocks unauthorized access to your network?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Firewall"]
      },
      {
        id: "m1-q23",
        type: "single",
        question: "Which option describes a network attack that occurs on the first day that a vulnerability becomes known?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Zero-day or Zero-hour"]
      },
      {
        id: "m1-q24",
        type: "single",
        question: "Which option describes malicious code running on user devices?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Virus, worm, or Trojan horse"]
      },
      {
        id: "m1-q25",
        type: "single",
        question: "How does BYOD change the way in which businesses implement networks?",
        answers: [
          "BYOD requires organizations to purchase laptops rather than desktops.",
          "BYOD users are responsible for their own network security, reducing the need for organizational security policies.",
          "BYOD devices are more expensive than devices purchased by an organization.",
          "BYOD provides flexibility in where and how users can access network resources."
        ],
        correct: ["BYOD provides flexibility in where and how users can access network resources."]
      },
      {
        id: "m1-q26",
        type: "single",
        question: "An employee wants to access the organization's network remotely in the safest possible way. What network feature allows secure remote access?",
        answers: ["ACL", "IPS", "VPN", "BYOD"],
        correct: ["VPN"]
      },
      {
        id: "m1-q27",
        type: "single",
        question: "What is the Internet?",
        answers: [
          "It is a network based on Ethernet technology.",
          "It provides network access for mobile devices.",
          "It provides connections through interconnected global networks.",
          "It is a private network for an organization with LAN and WAN connections."
        ],
        correct: ["It provides connections through interconnected global networks."]
      },
      {
        id: "m1-q28",
        type: "multi",
        question: "What are two functions of end devices on a network? (Choose two.)",
        answers: [
          "They originate the data that flows through the network.",
          "They direct data over alternate paths in the event of link failures.",
          "They filter the flow of data to enhance security.",
          "They are the interface between humans and the communication network.",
          "They provide the channel over which the network message travels."
        ],
        correct: [
          "They originate the data that flows through the network.",
          "They are the interface between humans and the communication network."
        ]
      },
      {
        id: "m1-q29",
        type: "single",
        question: "In which scenario would the use of a WISP be recommended?",
        answers: [
          "an Internet cafe in a city",
          "a farm in a rural area without wired broadband access",
          "any home with multiple wireless devices",
          "an apartment in a building with cable access to the Internet"
        ],
        correct: ["a farm in a rural area without wired broadband access"]
      },
      {
        id: "m1-q30",
        type: "single",
        question: "What characteristic of a network enables it to quickly grow to support new users and applications without impacting the performance of existing users?",
        answers: ["reliability", "scalability", "quality of service", "accessibility"],
        correct: ["scalability"]
      },
      {
        id: "m1-q31",
        type: "single",
        question: "A worker accidentally cuts a fiber optic cable connecting dormitories to a campus data center. Students only experience a very short interruption. What characteristic of the network is shown here?",
        answers: ["quality of service (QoS)", "scalability", "security", "fault tolerance", "integrity"],
        correct: ["fault tolerance"]
      },
      {
        id: "m1-q32",
        type: "multi",
        question: "What are two characteristics of a scalable network? (Choose two.)",
        answers: [
          "easily overloaded with increased traffic",
          "grows in size without impacting existing users",
          "is not as reliable as a small network",
          "suitable for modular devices that allow for expansion",
          "offers limited number of applications"
        ],
        correct: [
          "grows in size without impacting existing users",
          "suitable for modular devices that allow for expansion"
        ]
      },
      {
        id: "m1-q33",
        type: "single",
        question: "Which device performs the function of determining the path that messages should take through internetworks?",
        answers: ["a router", "a firewall", "a web server", "a DSL modem"],
        correct: ["a router"]
      },
      {
        id: "m1-q34",
        type: "multi",
        question: "Which two Internet connection options do not require that physical cables be run to the building? (Choose two.)",
        answers: ["DSL", "Cellular", "Satellite", "dialup", "dedicated leased line"],
        correct: ["Cellular", "Satellite"]
      },
      {
        id: "m1-q35",
        type: "single",
        question: "What type of network must a home user access in order to do online shopping?",
        answers: ["an intranet", "the Internet", "an extranet", "a local area network"],
        correct: ["the Internet"]
      },
      {
        id: "m1-q36",
        type: "single",
        question: "A technician discovered software secretly collecting data about websites visited by users. Which type of threat is this?",
        answers: ["DoS attack", "identity theft", "spyware", "zero-day attack"],
        correct: ["spyware"]
      },
      {
        id: "m1-q37",
        type: "single",
        question: "Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?",
        answers: ["Internet", "intranet", "extranet", "extendednet"],
        correct: ["extranet"]
      },
      {
        id: "m1-q38",
        type: "single",
        question: "A large corporation modified its network to allow users to access network resources from personal laptops and smart phones. Which networking trend does this describe?",
        answers: ["cloud computing", "online collaboration", "bring your own device", "video conferencing"],
        correct: ["bring your own device"]
      },
      {
        id: "m1-q39",
        type: "single",
        question: "What is an ISP?",
        answers: [
          "It is a standards body that develops cabling and wiring standards for networking.",
          "It is a protocol that establishes how computers within a local network communicate.",
          "It is an organization that enables individuals and businesses to connect to the Internet.",
          "It is a networking device that combines the functionality of several different networking devices in one."
        ],
        correct: ["It is an organization that enables individuals and businesses to connect to the Internet."]
      }
    ]
  }
];
