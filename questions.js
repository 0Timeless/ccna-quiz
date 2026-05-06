const MODULES = [
  {
    id: "module-1",
    title: "Module 1: Networking Today",
    questions: [
      {
        id: "m1-q1", type: "single",
        question: "Which of the following is the name for all computers connected to a network that participate directly in network communication?",
        answers: ["servers", "intermediary devices", "hosts", "media"],
        correct: ["hosts"]
      },
      {
        id: "m1-q2", type: "single",
        question: "When data is encoded as pulses of light, which media is being used to transmit the data?",
        answers: ["wireless", "Fiber-optic cable", "copper cable"],
        correct: ["Fiber-optic cable"]
      },
      {
        id: "m1-q3", type: "multi",
        question: "Which two devices are intermediary devices? (Choose two)",
        answers: ["hosts", "routers", "servers", "switches"],
        correct: ["routers", "switches"]
      },
      {
        id: "m1-q4", type: "single",
        question: "Which connection physically connects the end device to the network?",
        answers: ["Port", "NIC", "Interface"],
        correct: ["NIC"]
      },
      {
        id: "m1-q5", type: "single",
        question: "Which connections are specialized ports on a networking device that connect to individual networks?",
        answers: ["Port", "NIC", "Interface"],
        correct: ["Interface"]
      },
      {
        id: "m1-q6", type: "single",
        question: "Which type of network topology lets you see which end devices are connected to which intermediary devices and what media is being used?",
        answers: ["Physical topology", "Logical topology"],
        correct: ["Logical topology"]
      },
      {
        id: "m1-q7", type: "single",
        question: "Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
        answers: ["Physical topology", "Logical topology"],
        correct: ["Physical topology"]
      },
      {
        id: "m1-q8", type: "single",
        question: "Which network infrastructure provides access to users and end devices in a small geographical area, typically a department, home, or small business?",
        answers: ["Extranet", "Intranet", "LAN", "WAN"],
        correct: ["LAN"]
      },
      {
        id: "m1-q9", type: "single",
        question: "Which network infrastructure might an organization use to provide secure access to individuals from a different organization who require access to the organization's data?",
        answers: ["Extranet", "Intranet", "LAN", "WAN"],
        correct: ["Extranet"]
      },
      {
        id: "m1-q10", type: "single",
        question: "Which network infrastructure provides access to other networks over a large geographical area, often owned by a telecommunications service provider?",
        answers: ["Extranet", "Intranet", "LAN", "WAN"],
        correct: ["WAN"]
      },
      {
        id: "m1-q11", type: "single",
        question: "When designers follow accepted standards and protocols, which of the four basic characteristics of network architecture is achieved?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["Scalability"]
      },
      {
        id: "m1-q12", type: "single",
        question: "Confidentiality, integrity, and availability are requirements of which of the four basic characteristics of network architecture?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["Security"]
      },
      {
        id: "m1-q13", type: "single",
        question: "With which type of policy can a router manage the flow of data and voice traffic, giving priority to voice communications if the network experiences congestion?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["QoS"]
      },
      {
        id: "m1-q14", type: "single",
        question: "Having multiple paths to a destination is known as redundancy. This is an example of which characteristic of network architecture?",
        answers: ["fault tolerance", "Scalability", "QoS", "Security"],
        correct: ["fault tolerance"]
      },
      {
        id: "m1-q15", type: "single",
        question: "Which feature is a good conferencing tool to use with others located elsewhere in your city, or even in another country?",
        answers: ["BYOD", "Video communications", "Cloud computing"],
        correct: ["Video communications"]
      },
      {
        id: "m1-q16", type: "single",
        question: "Which feature describes using personal tools to access information and communicate across a business or campus network?",
        answers: ["BYOD", "Video communications", "Cloud computing"],
        correct: ["BYOD"]
      },
      {
        id: "m1-q17", type: "single",
        question: "Which feature contains options such as Public, Private, Custom and Hybrid?",
        answers: ["BYOD", "Video communications", "Cloud computing"],
        correct: ["Cloud computing"]
      },
      {
        id: "m1-q18", type: "single",
        question: "Which feature is being used when connecting a device to the network using an electrical outlet?",
        answers: ["Smart home technology", "Powerline", "Wireless broadband"],
        correct: ["Powerline"]
      },
      {
        id: "m1-q19", type: "single",
        question: "Which feature uses the same cellular technology as a smart phone?",
        answers: ["Smart home technology", "Powerline", "Wireless broadband"],
        correct: ["Wireless broadband"]
      },
      {
        id: "m1-q20", type: "single",
        question: "Which attack slows down or crashes equipment and programs?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Denial of Service (DoS)"]
      },
      {
        id: "m1-q21", type: "single",
        question: "Which option creates a secure connection for remote workers?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Virtual Private Network (VPN)"]
      },
      {
        id: "m1-q22", type: "single",
        question: "Which option blocks unauthorized access to your network?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Firewall"]
      },
      {
        id: "m1-q23", type: "single",
        question: "Which option describes a network attack that occurs on the first day that a vulnerability becomes known?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Zero-day or Zero-hour"]
      },
      {
        id: "m1-q24", type: "single",
        question: "Which option describes malicious code running on user devices?",
        answers: ["Firewall", "Virus, worm, or Trojan horse", "Zero-day or Zero-hour", "Virtual Private Network (VPN)", "Denial of Service (DoS)"],
        correct: ["Virus, worm, or Trojan horse"]
      },
      {
        id: "m1-q25", type: "single",
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
        id: "m1-q26", type: "single",
        question: "An employee wants to access the organization's network remotely in the safest possible way. What network feature allows secure remote access?",
        answers: ["ACL", "IPS", "VPN", "BYOD"],
        correct: ["VPN"]
      },
      {
        id: "m1-q27", type: "single",
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
        id: "m1-q28", type: "multi",
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
        id: "m1-q29", type: "single",
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
        id: "m1-q30", type: "single",
        question: "What characteristic of a network enables it to quickly grow to support new users and applications without impacting the performance of existing users?",
        answers: ["reliability", "scalability", "quality of service", "accessibility"],
        correct: ["scalability"]
      },
      {
        id: "m1-q31", type: "single",
        question: "A worker accidentally cuts a fiber optic cable connecting dormitories to a campus data center. Students only experience a very short interruption. What characteristic of the network is shown here?",
        answers: ["quality of service (QoS)", "scalability", "security", "fault tolerance", "integrity"],
        correct: ["fault tolerance"]
      },
      {
        id: "m1-q32", type: "multi",
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
        id: "m1-q33", type: "single",
        question: "Which device performs the function of determining the path that messages should take through internetworks?",
        answers: ["a router", "a firewall", "a web server", "a DSL modem"],
        correct: ["a router"]
      },
      {
        id: "m1-q34", type: "multi",
        question: "Which two Internet connection options do not require that physical cables be run to the building? (Choose two.)",
        answers: ["DSL", "Cellular", "Satellite", "dialup", "dedicated leased line"],
        correct: ["Cellular", "Satellite"]
      },
      {
        id: "m1-q35", type: "single",
        question: "What type of network must a home user access in order to do online shopping?",
        answers: ["an intranet", "the Internet", "an extranet", "a local area network"],
        correct: ["the Internet"]
      },
      {
        id: "m1-q36", type: "single",
        question: "A technician discovered software secretly collecting data about websites visited by users. Which type of threat is this?",
        answers: ["DoS attack", "identity theft", "spyware", "zero-day attack"],
        correct: ["spyware"]
      },
      {
        id: "m1-q37", type: "single",
        question: "Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?",
        answers: ["Internet", "intranet", "extranet", "extendednet"],
        correct: ["extranet"]
      },
      {
        id: "m1-q38", type: "single",
        question: "A large corporation modified its network to allow users to access network resources from personal laptops and smart phones. Which networking trend does this describe?",
        answers: ["cloud computing", "online collaboration", "bring your own device", "video conferencing"],
        correct: ["bring your own device"]
      },
      {
        id: "m1-q39", type: "single",
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
  },
  {
    id: "module-2",
    title: "Module 2: Basic Switch and End Device Configuration",
    questions: [
      {
        id: "m2-q1", type: "single",
        question: "Which access method would be most appropriate if you were in the equipment room with a new switch that needs to be configured?",
        answers: ["Console", "Telnet/SSH", "Aux"],
        correct: ["Console"]
      },
      {
        id: "m2-q2", type: "single",
        question: "Which access method would be most appropriate if your manager gave you a special cable and told you to use it to configure the switch?",
        answers: ["Console", "Telnet/SSH", "Aux"],
        correct: ["Console"]
      },
      {
        id: "m2-q3", type: "single",
        question: "Which access method would be the most appropriate in-band access to the IOS over a network connection?",
        answers: ["Console", "Telnet/SSH", "Aux"],
        correct: ["Telnet/SSH"]
      },
      {
        id: "m2-q4", type: "single",
        question: "Which access method would be the most appropriate if you cannot access your router in another city over the internet and your manager provides information to access the router through a telephone connection?",
        answers: ["Console", "Telnet/SSH", "Aux"],
        correct: ["Aux"]
      },
      {
        id: "m2-q5", type: "single",
        question: "Which IOS mode allows access to all commands and features?",
        answers: ["global configuration mode", "interface subconfiguration mode", "line console subconfiguration mode", "privileged EXEC mode", "user EXEC mode"],
        correct: ["privileged EXEC mode"]
      },
      {
        id: "m2-q6", type: "single",
        question: "Which IOS mode are you in if the Switch(config)# prompt is displayed?",
        answers: ["global configuration mode", "interface subconfiguration mode", "line console subconfiguration mode", "privileged EXEC mode", "user EXEC mode"],
        correct: ["user EXEC mode"]
      },
      {
        id: "m2-q7", type: "multi",
        question: "Which two commands would return you to the privileged EXEC prompt regardless of the configuration mode you are in? (Choose two.)",
        answers: ["CTRL+Z", "disable", "enable", "end", "exit"],
        correct: ["CTRL+Z", "end"]
      },
      {
        id: "m2-q8", type: "single",
        question: "What is the command to assign the name "Sw-Floor-2" to a switch?",
        answers: ["hostname Sw-Floor-2", "host name Sw-Floor-2", "name Sw-Floor-2"],
        correct: ["hostname Sw-Floor-2"]
      },
      {
        id: "m2-q9", type: "single",
        question: "How is the privileged EXEC mode access secured on a switch?",
        answers: ["enable class", "secret class", "enable secret class", "service password-encryption"],
        correct: ["enable secret class"]
      },
      {
        id: "m2-q10", type: "single",
        question: "Which command enables password authentication for user EXEC mode access on a switch?",
        answers: ["enable secret", "login", "secret", "service password-encryption"],
        correct: ["login"]
      },
      {
        id: "m2-q11", type: "single",
        question: "Which command encrypts all plaintext passwords on a switch?",
        answers: ["enable secret", "login", "secret", "service password-encryption"],
        correct: ["service password-encryption"]
      },
      {
        id: "m2-q12", type: "single",
        question: "Which is the command to configure a banner to be displayed when connecting to a switch?",
        answers: ["banner $ Keep out $", "banner motd $ Keep out $", "display $ Keep out $", "login banner $ Keep out $"],
        correct: ["banner motd $ Keep out $"]
      },
      {
        id: "m2-q13", type: "single",
        question: "What is the structure of an IPv4 address called?",
        answers: ["dotted-binary format", "dotted-decimal format", "dotted-hexadecimal format"],
        correct: ["dotted-decimal format"]
      },
      {
        id: "m2-q14", type: "single",
        question: "How is an IPv4 address represented?",
        answers: [
          "four binary numbers between 0 and 1 separated by colons.",
          "four decimal numbers between 0 and 255 separated by periods.",
          "thirty-two hexadecimal numbers separated by colons.",
          "thirty-two hexadecimal numbers separated by periods."
        ],
        correct: ["four decimal numbers between 0 and 255 separated by periods."]
      },
      {
        id: "m2-q15", type: "single",
        question: "What type of interface has no physical port associated with it?",
        answers: ["console", "Ethernet", "serial", "switch virtual interface (SVI)"],
        correct: ["switch virtual interface (SVI)"]
      },
      {
        id: "m2-q16", type: "single",
        question: "Which functionality is provided by DHCP?",
        answers: [
          "automatic assignment of an IP address to each host",
          "remote switch management",
          "translation of IP addresses to domain names",
          "end-to-end connectivity test"
        ],
        correct: ["automatic assignment of an IP address to each host"]
      },
      {
        id: "m2-q17", type: "multi",
        question: "Which two functions are provided to users by the context-sensitive help feature of the Cisco IOS CLI? (Choose two.)",
        answers: [
          "providing an error message when a wrong command is submitted",
          "displaying a list of all available commands within the current mode",
          "allowing the user to complete the remainder of an abbreviated command with the TAB key",
          "determining which option, keyword, or argument is available for the entered command",
          "selecting the best command to accomplish a task"
        ],
        correct: [
          "displaying a list of all available commands within the current mode",
          "determining which option, keyword, or argument is available for the entered command"
        ]
      },
      {
        id: "m2-q18", type: "single",
        question: "Which memory location on a Cisco router or switch stores the startup configuration file?",
        answers: ["RAM", "ROM", "NVRAM", "flash"],
        correct: ["NVRAM"]
      },
      {
        id: "m2-q19", type: "single",
        question: "To what subnet does the IP address 10.1.100.50 belong if a subnet mask of 255.255.0.0 is used?",
        answers: ["10.1.0.0", "10.0.0.0", "10.1.100.32", "10.1.100.0"],
        correct: ["10.1.0.0"]
      },
      {
        id: "m2-q20", type: "multi",
        question: "When a hostname is configured through the Cisco CLI, which three naming conventions are part of the guidelines? (Choose three.)",
        answers: [
          "the hostname should be fewer than 64 characters in length",
          "the hostname should be written in all lower case characters",
          "the hostname should contain no spaces",
          "the hostname should end with a special character",
          "the hostname should begin with a letter"
        ],
        correct: [
          "the hostname should be fewer than 64 characters in length",
          "the hostname should contain no spaces",
          "the hostname should begin with a letter"
        ]
      },
      {
        id: "m2-q21", type: "single",
        question: "What is the function of the shell in an OS?",
        answers: [
          "It interacts with the device hardware.",
          "It interfaces between the users and the kernel.",
          "It provides dedicated firewall services.",
          "It provides the intrusion protection services for the device."
        ],
        correct: ["It interfaces between the users and the kernel."]
      },
      {
        id: "m2-q22", type: "single",
        question: "A router with a valid operating system contains a configuration file stored in NVRAM. The configuration file has an enable secret password but no console password. When the router boots up, which mode will display?",
        answers: ["global configuration mode", "setup mode", "privileged EXEC mode", "user EXEC mode"],
        correct: ["user EXEC mode"]
      },
      {
        id: "m2-q23", type: "single",
        question: "An administrator has just changed the IP address of an interface on an IOS device. What else must be done in order to apply those changes to the device?",
        answers: [
          "Copy the running configuration to the startup configuration file.",
          "Copy the information in the startup configuration file to the running configuration.",
          "Reload the device and type yes when prompted to save the configuration.",
          "Nothing must be done. Changes to the configuration on an IOS device take effect as soon as the command is typed correctly and the Enter key has been pressed."
        ],
        correct: ["Nothing must be done. Changes to the configuration on an IOS device take effect as soon as the command is typed correctly and the Enter key has been pressed."]
      },
      {
        id: "m2-q24", type: "single",
        question: "Which memory location on a Cisco router or switch will lose all content when the device is restarted?",
        answers: ["ROM", "flash", "NVRAM", "RAM"],
        correct: ["RAM"]
      },
      {
        id: "m2-q25", type: "single",
        question: "Why would a technician enter the command copy startup-config running-config?",
        answers: [
          "to remove all configurations from the switch",
          "to save an active configuration to NVRAM",
          "to copy an existing configuration into RAM",
          "to make a changed configuration the new startup configuration"
        ],
        correct: ["to copy an existing configuration into RAM"]
      },
      {
        id: "m2-q26", type: "single",
        question: "Which statement is true about the running configuration file in a Cisco IOS device?",
        answers: [
          "It affects the operation of the device immediately when modified.",
          "It is stored in NVRAM.",
          "It should be deleted using the erase running-config command.",
          "It is automatically saved when the router reboots."
        ],
        correct: ["It affects the operation of the device immediately when modified."]
      },
      {
        id: "m2-q27", type: "multi",
        question: "Which two statements are true regarding the user EXEC mode? (Choose two.)",
        answers: [
          "All router commands are available.",
          "Global configuration mode can be accessed by entering the enable command.",
          "The device prompt for this mode ends with the \">\" symbol.",
          "Interfaces and routing protocols can be configured.",
          "Only some aspects of the router configuration can be viewed."
        ],
        correct: [
          "The device prompt for this mode ends with the \">\" symbol.",
          "Only some aspects of the router configuration can be viewed."
        ]
      },
      {
        id: "m2-q28", type: "single",
        question: "Which type of access is secured on a Cisco router or switch with the enable secret command?",
        answers: ["virtual terminal", "privileged EXEC", "AUX port", "console line"],
        correct: ["privileged EXEC"]
      },
      {
        id: "m2-q29", type: "single",
        question: "What is the default SVI on a Cisco switch?",
        answers: ["VLAN1", "VLAN99", "VLAN100", "VLAN999"],
        correct: ["VLAN1"]
      }
    ]
  }
];
