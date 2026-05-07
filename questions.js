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
        question: "What is the command to assign the name 'Sw-Floor-2' to a switch?",
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
          "The device prompt for this mode ends with the '>' symbol.",
          "Interfaces and routing protocols can be configured.",
          "Only some aspects of the router configuration can be viewed."
        ],
        correct: [
          "The device prompt for this mode ends with the '>' symbol.",
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
  ,
  {
    id: "module-3",
    title: "Module 3: Protocols and Models",
    questions: [
      {
        id: "m3-q1", type: "multi",
        question: "Which three acronyms/initialisms represent standards organizations? (Choose three.)",
        answers: ["IETF", "IEEE", "OSI", "IANA", "MAC", "TCP/IP"],
        correct: ["IETF", "IEEE", "IANA"]
      },
      {
        id: "m3-q2", type: "single",
        question: "What type of communication will send a message to all devices on a local area network?",
        answers: ["multicast", "allcast", "broadcast", "unicast"],
        correct: ["broadcast"]
      },
      {
        id: "m3-q3", type: "single",
        question: "In computer communication, what is the purpose of message encoding?",
        answers: [
          "to interpret information",
          "to break large messages into smaller frames",
          "to negotiate correct timing for successful communication",
          "to convert information to the appropriate form for transmission"
        ],
        correct: ["to convert information to the appropriate form for transmission"]
      },
      {
        id: "m3-q4", type: "single",
        question: "Which message delivery option is used when all devices need to receive the same message simultaneously?",
        answers: ["duplex", "broadcast", "unicast", "multicast"],
        correct: ["broadcast"]
      },
      {
        id: "m3-q5", type: "multi",
        question: "What are two benefits of using a layered network model? (Choose two.)",
        answers: [
          "It ensures a device at one layer can function at the next higher layer.",
          "It speeds up packet delivery.",
          "It assists in protocol design.",
          "It prevents designers from creating their own model.",
          "It prevents technology in one layer from affecting other layers."
        ],
        correct: [
          "It assists in protocol design.",
          "It prevents technology in one layer from affecting other layers."
        ]
      },
      {
        id: "m3-q6", type: "single",
        question: "What is the purpose of protocols in data communications?",
        answers: [
          "specifying the bandwidth of the channel or medium for each type of communication",
          "providing the rules required for a specific type of communication to occur",
          "specifying the device operating systems that will support the communication",
          "dictating the content of the message sent during communication"
        ],
        correct: ["providing the rules required for a specific type of communication to occur"]
      },
      {
        id: "m3-q7", type: "single",
        question: "Which logical address is used for delivery of data to a remote network?",
        answers: [
          "destination MAC address",
          "source MAC address",
          "destination IP address",
          "destination port number",
          "source IP address"
        ],
        correct: ["destination IP address"]
      },
      {
        id: "m3-q8", type: "single",
        question: "What is the general term that is used to describe a piece of data at any layer of a networking model?",
        answers: ["segment", "packet", "frame", "protocol data unit"],
        correct: ["protocol data unit"]
      },
      {
        id: "m3-q9", type: "multi",
        question: "Which two protocols function at the internet layer? (Choose two.)",
        answers: ["BOOTP", "ICMP", "PPP", "POP", "IP"],
        correct: ["ICMP", "IP"]
      },
      {
        id: "m3-q10", type: "single",
        question: "Which layer of the OSI model defines services to segment and reassemble data for individual communications between end devices?",
        answers: ["presentation", "network", "transport", "session", "application"],
        correct: ["transport"]
      },
      {
        id: "m3-q11", type: "single",
        question: "Which type of communication will send a message to a group of host destinations simultaneously?",
        answers: ["broadcast", "multicast", "unicast", "anycast"],
        correct: ["multicast"]
      },
      {
        id: "m3-q12", type: "single",
        question: "What process is used to receive transmitted data and convert it into a readable message?",
        answers: ["encapsulation", "decoding", "access control", "flow control"],
        correct: ["decoding"]
      },
      {
        id: "m3-q13", type: "single",
        question: "What is done to an IP packet before it is transmitted over the physical medium?",
        answers: [
          "It is segmented into smaller individual pieces.",
          "It is encapsulated into a TCP segment.",
          "It is encapsulated in a Layer 2 frame.",
          "It is tagged with information guaranteeing reliable delivery."
        ],
        correct: ["It is encapsulated in a Layer 2 frame."]
      },
      {
        id: "m3-q14", type: "single",
        question: "What process is used to place one message inside another message for transfer from the source to the destination?",
        answers: ["access control", "flow control", "encapsulation", "decoding"],
        correct: ["encapsulation"]
      },
      {
        id: "m3-q15", type: "single",
        question: "A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack used to prepare the request for transmission?",
        answers: [
          "Ethernet, TCP, IP, HTTP",
          "Ethernet, IP, TCP, HTTP",
          "HTTP, IP, TCP, Ethernet",
          "HTTP, TCP, IP, Ethernet"
        ],
        correct: ["HTTP, TCP, IP, Ethernet"]
      }
    ]
  }
  ,
  {
    id: "module-4",
    title: "Module 4: Physical Layer",
    questions: [
      {
        id: "m4-q1", type: "single",
        question: "Which type of cable is used to connect a workstation serial port to a Cisco router console port?",
        answers: ["coaxial", "straight-through", "crossover", "rollover"],
        correct: ["rollover"]
      },
      {
        id: "m4-q2", type: "single",
        question: "Why are two strands of fiber used for a single fiber optic connection?",
        answers: [
          "The two strands allow the data to travel further without signal loss.",
          "They allow for full-duplex connectivity.",
          "They prevent crosstalk from causing interference on the connection.",
          "Two strands strengthen the connection reducing the chance of physical damage."
        ],
        correct: ["They allow for full-duplex connectivity."]
      },
      {
        id: "m4-q3", type: "single",
        question: "Which physical layer media is susceptible to electromagnetic interference?",
        answers: ["multimode fiber", "single-mode fiber", "UTP cable", "STP cable"],
        correct: ["UTP cable"]
      },
      {
        id: "m4-q4", type: "single",
        question: "What is the purpose of the physical layer in OSI model?",
        answers: [
          "controls how data is received, decoded and formatted",
          "defines standards for connectivity, media and signals",
          "handles the addressing of packets",
          "manages error detection and correction"
        ],
        correct: ["defines standards for connectivity, media and signals"]
      },
      {
        id: "m4-q5", type: "single",
        question: "Which type of UTP cable is used to connect a host to a switch?",
        answers: ["crossover", "rollover", "straight-through", "console"],
        correct: ["straight-through"]
      },
      {
        id: "m4-q6", type: "single",
        question: "What is the maximum bandwidth of UTP Cat 5e cable?",
        answers: ["10 Mbps", "100 Mbps", "1000 Mbps", "10 Gbps"],
        correct: ["1000 Mbps"]
      },
      {
        id: "m4-q7", type: "single",
        question: "Which wireless standard operates only in the 5 GHz range?",
        answers: ["802.11b", "802.11g", "802.11n", "802.11a"],
        correct: ["802.11a"]
      },
      {
        id: "m4-q8", type: "multi",
        question: "Which two factors determine the bandwidth of a network? (Choose two.)",
        answers: [
          "The properties of the medium",
          "The number of hosts on the network",
          "The technologies chosen for signaling and detecting signals",
          "The distance of the signal transmission",
          "The color of the cable"
        ],
        correct: ["The properties of the medium", "The technologies chosen for signaling and detecting signals"]
      },
      {
        id: "m4-q9", type: "single",
        question: "Which layer of the OSI model is responsible for encoding and decoding data into signals?",
        answers: ["Data Link", "Network", "Physical", "Transport"],
        correct: ["Physical"]
      },
      {
        id: "m4-q10", type: "single",
        question: "What term describes the measure of the transfer of bits across the media over a given period of time?",
        answers: ["latency", "bandwidth", "goodput", "throughput"],
        correct: ["bandwidth"]
      }
    ]
  },
  {
    id: "module-5",
    title: "Module 5: Number Systems",
    questions: [
      {
        id: "m5-q1", type: "single",
        question: "What is the binary representation for the decimal number 173?",
        answers: ["10100111", "10100101", "10101101", "10110101"],
        correct: ["10101101"]
      },
      {
        id: "m5-q2", type: "single",
        question: "Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?",
        answers: ["234.17.10.9", "234.16.12.10", "236.17.12.6", "236.17.12.10"],
        correct: ["236.17.12.10"]
      },
      {
        id: "m5-q3", type: "single",
        question: "How many binary bits exist within an IPv6 address?",
        answers: ["32", "48", "64", "128", "256"],
        correct: ["128"]
      },
      {
        id: "m5-q4", type: "single",
        question: "What is the binary equivalent of the decimal number 232?",
        answers: ["11101000", "11000110", "10011000", "11110010"],
        correct: ["11101000"]
      },
      {
        id: "m5-q5", type: "multi",
        question: "Which two statements are correct about IPv4 and IPv6 addresses? (Choose two.)",
        answers: [
          "IPv6 addresses are represented by hexadecimal numbers.",
          "IPv4 addresses are represented by hexadecimal numbers.",
          "IPv6 addresses are 32 bits in length.",
          "IPv4 addresses are 32 bits in length.",
          "IPv4 addresses are 128 bits in length.",
          "IPv6 addresses are 64 bits in length."
        ],
        correct: ["IPv6 addresses are represented by hexadecimal numbers.", "IPv4 addresses are 32 bits in length."]
      },
      {
        id: "m5-q6", type: "single",
        question: "Which IPv4 address format was created for ease of use by people and is expressed as 201.192.1.14?",
        answers: ["Binary", "Dotted decimal", "Hexadecimal", "ASCII"],
        correct: ["Dotted decimal"]
      },
      {
        id: "m5-q7", type: "single",
        question: "What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?",
        answers: ["192.0.2.199", "198.51.100.201", "203.0.113.211", "209.165.201.223"],
        correct: ["203.0.113.211"]
      },
      {
        id: "m5-q8", type: "single",
        question: "What is the decimal equivalent of the binary number 10010101?",
        answers: ["149", "157", "168", "192"],
        correct: ["149"]
      },
      {
        id: "m5-q9", type: "single",
        question: "What is the decimal equivalent of the hex number 0x3F?",
        answers: ["63", "77", "87", "93"],
        correct: ["63"]
      },
      {
        id: "m5-q10", type: "single",
        question: "What is the dotted decimal representation of the IPv4 address 00001010.01100100.00010101.00000001?",
        answers: ["10.100.21.1", "10.10.20.1", "100.10.11.1", "100.21.10.1"],
        correct: ["10.100.21.1"]
      },
      {
        id: "m5-q11", type: "single",
        question: "What is the decimal equivalent of 0xC9?",
        answers: ["185", "200", "201", "199"],
        correct: ["201"]
      },
      {
        id: "m5-q12", type: "single",
        question: "Which is a valid hexadecimal number?",
        answers: ["F", "G", "H", "J"],
        correct: ["F"]
      },
      {
        id: "m5-q13", type: "single",
        question: "What is the binary representation of 0xCA?",
        answers: ["10111010", "11010101", "11001010", "11011010"],
        correct: ["11001010"]
      },
      {
        id: "m5-q14", type: "single",
        question: "How many bits are in an IPv4 address?",
        answers: ["32", "64", "128", "256"],
        correct: ["32"]
      }
    ]
  },
  {
    id: "module-6",
    title: "Module 6: Data Link Layer",
    questions: [
      {
        id: "m6-q1", type: "single",
        question: "What identifier is used at the data link layer to uniquely identify an Ethernet device?",
        answers: ["IP address", "MAC address", "Sequence number", "TCP port number", "UDP port number"],
        correct: ["MAC address"]
      },
      {
        id: "m6-q2", type: "single",
        question: "What attribute of a NIC would place it at the data link layer of the OSI model?",
        answers: ["Attached Ethernet cable", "IP address", "MAC address", "RJ-45 port", "TCP/IP protocol stack"],
        correct: ["MAC address"]
      },
      {
        id: "m6-q3", type: "multi",
        question: "Which two engineering organizations define open standards and protocols that apply to the data link layer? (Choose two.)",
        answers: ["IEEE", "IANA", "ITU", "EIA", "ISOC"],
        correct: ["IEEE", "ITU"]
      },
      {
        id: "m6-q4", type: "single",
        question: "What is true concerning physical and logical topologies?",
        answers: [
          "The logical topology is always the same as the physical topology.",
          "Physical topologies are concerned with how a network transfers frames.",
          "Physical topologies display the IP addressing scheme of each network.",
          "Logical topologies refer to how a network transfers data between devices."
        ],
        correct: ["Logical topologies refer to how a network transfers data between devices."]
      },
      {
        id: "m6-q5", type: "single",
        question: "What method is used to manage contention-based access on a wireless network?",
        answers: ["CSMA/CD", "Priority ordering", "CSMA/CA", "Token passing"],
        correct: ["CSMA/CA"]
      },
      {
        id: "m6-q6", type: "single",
        question: "A technician needs a network that provides a high level of redundancy. Which physical topology requires every node to be attached to every other node?",
        answers: ["Bus", "Hierarchical", "Mesh", "Ring", "Star"],
        correct: ["Mesh"]
      },
      {
        id: "m6-q7", type: "single",
        question: "Which statement describes the half-duplex mode of data transmission?",
        answers: [
          "Data flows in one direction only.",
          "Data flows in one direction at a time.",
          "Data flows in one direction to many destinations simultaneously.",
          "Data flows in both directions at the same time."
        ],
        correct: ["Data flows in one direction at a time."]
      },
      {
        id: "m6-q8", type: "single",
        question: "Which is a function of the Logical Link Control (LLC) sublayer?",
        answers: [
          "To define the media access processes performed by the hardware",
          "To provide data link layer addressing",
          "To identify which network layer protocol is being used",
          "To accept segments and package them into packets"
        ],
        correct: ["To identify which network layer protocol is being used"]
      },
      {
        id: "m6-q9", type: "single",
        question: "Which data link layer media access control method does Ethernet use with legacy Ethernet hubs?",
        answers: ["CSMA/CD", "Determinism", "Turn taking", "Token passing"],
        correct: ["CSMA/CD"]
      },
      {
        id: "m6-q10", type: "multi",
        question: "What are the two sublayers of the OSI model data link layer? (Choose two.)",
        answers: ["Internet", "Physical", "LLC", "Transport", "MAC", "Network access"],
        correct: ["LLC", "MAC"]
      },
      {
        id: "m6-q11", type: "single",
        question: "Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?",
        answers: ["Application", "Transport", "Data link", "Physical"],
        correct: ["Data link"]
      },
      {
        id: "m6-q12", type: "single",
        question: "What type of physical topology can be created by connecting all Ethernet cables to a central device?",
        answers: ["Bus", "Ring", "Star", "Mesh"],
        correct: ["Star"]
      },
      {
        id: "m6-q13", type: "multi",
        question: "What are two services performed by the data link layer of the OSI model? (Choose two.)",
        answers: [
          "It fragments data packets into the MTU size.",
          "It determines the path to forward packets.",
          "It accepts Layer 3 packets and encapsulates them into frames.",
          "It provides media access control and performs error detection.",
          "It monitors the Layer 2 communication by building a MAC address table."
        ],
        correct: [
          "It accepts Layer 3 packets and encapsulates them into frames.",
          "It provides media access control and performs error detection."
        ]
      },
      {
        id: "m6-q14", type: "single",
        question: "Although CSMA/CD is still a feature of Ethernet, why is it no longer necessary?",
        answers: [
          "The virtually unlimited availability of IPv6 addresses",
          "The use of CSMA/CA",
          "The use of full-duplex capable Layer 2 switches",
          "The development of half-duplex switch operation",
          "The use of Gigabit Ethernet speeds"
        ],
        correct: ["The use of full-duplex capable Layer 2 switches"]
      }
    ]
  },
  {
    id: "module-7",
    title: "Module 7: Ethernet Switching",
    questions: [
      {
        id: "m7-q1", type: "multi",
        question: "Which two characteristics describe Ethernet technology? (Choose two.)",
        answers: [
          "It is supported by IEEE 802.3 standards.",
          "It is supported by IEEE 802.5 standards.",
          "It typically uses an average of 16 Mbps for data transfer rates.",
          "It uses unique MAC addresses to ensure that data is sent to the appropriate destination.",
          "It uses a ring topology."
        ],
        correct: [
          "It is supported by IEEE 802.3 standards.",
          "It uses unique MAC addresses to ensure that data is sent to the appropriate destination."
        ]
      },
      {
        id: "m7-q2", type: "single",
        question: "What statement describes a characteristic of MAC addresses?",
        answers: [
          "They must be globally unique.",
          "They are only routable within the private network.",
          "They are added as part of a Layer 3 PDU.",
          "They have a 32-bit binary value."
        ],
        correct: ["They must be globally unique."]
      },
      {
        id: "m7-q3", type: "single",
        question: "What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?",
        answers: ["01-5E-00", "FF-00-5E", "FF-FF-FF", "01-00-5E"],
        correct: ["01-00-5E"]
      },
      {
        id: "m7-q4", type: "single",
        question: "What will a host on an Ethernet network do if it receives a frame with a unicast destination MAC address that does not match its own MAC address?",
        answers: [
          "It will discard the frame.",
          "It will forward the frame to the next host.",
          "It will remove the frame from the media.",
          "It will strip off the data-link frame to check the destination IP address."
        ],
        correct: ["It will discard the frame."]
      },
      {
        id: "m7-q5", type: "single",
        question: "Which network device makes forwarding decisions based on the destination MAC address that is contained in the frame?",
        answers: ["Repeater", "Hub", "Switch", "Router"],
        correct: ["Switch"]
      },
      {
        id: "m7-q6", type: "single",
        question: "Which network device has the primary function to send data to a specific destination based on the MAC address table?",
        answers: ["Hub", "Router", "Switch", "Modem"],
        correct: ["Switch"]
      },
      {
        id: "m7-q7", type: "single",
        question: "Which function or operation is performed by the LLC sublayer?",
        answers: [
          "It performs data encapsulation.",
          "It communicates with upper protocol layers.",
          "It is responsible for media access control.",
          "It adds a header and trailer to a packet to form an OSI Layer 2 PDU."
        ],
        correct: ["It communicates with upper protocol layers."]
      },
      {
        id: "m7-q8", type: "single",
        question: "What happens to runt frames received by a Cisco Ethernet switch?",
        answers: [
          "The frame is dropped.",
          "The frame is returned to the originating network device.",
          "The frame is broadcast to all other devices on the same network.",
          "The frame is sent to the default gateway."
        ],
        correct: ["The frame is dropped."]
      },
      {
        id: "m7-q9", type: "single",
        question: "What addressing information is recorded by a switch to build its MAC address table?",
        answers: [
          "The destination Layer 3 address of incoming packets",
          "The destination Layer 2 address of outgoing frames",
          "The source Layer 3 address of outgoing packets",
          "The source Layer 2 address of incoming frames"
        ],
        correct: ["The source Layer 2 address of incoming frames"]
      },
      {
        id: "m7-q10", type: "single",
        question: "What is auto-MDIX?",
        answers: [
          "A type of Cisco switch",
          "An Ethernet connector type",
          "A feature to automatically determine speed and duplex",
          "A feature that detects Ethernet cable type"
        ],
        correct: ["A feature that detects Ethernet cable type"]
      },
      {
        id: "m7-q11", type: "single",
        question: "What type of address is 01-00-5E-0A-00-02?",
        answers: [
          "An address that reaches every host inside a local subnet",
          "An address that reaches one specific host",
          "An address that reaches every host in the network",
          "An address that reaches a specific group of hosts"
        ],
        correct: ["An address that reaches a specific group of hosts"]
      },
      {
        id: "m7-q12", type: "single",
        question: "Which statement is true about MAC addresses?",
        answers: [
          "MAC addresses are implemented by software.",
          "A NIC only needs a MAC address if connected to a WAN.",
          "The first three bytes are used by the vendor assigned OUI.",
          "The ISO is responsible for MAC addresses regulations."
        ],
        correct: ["The first three bytes are used by the vendor assigned OUI."]
      },
      {
        id: "m7-q13", type: "multi",
        question: "What are the two sizes (minimum and maximum) of an Ethernet frame? (Choose two.)",
        answers: ["56 bytes", "64 bytes", "128 bytes", "1024 bytes", "1518 bytes"],
        correct: ["64 bytes", "1518 bytes"]
      },
      {
        id: "m7-q14", type: "multi",
        question: "Which two functions or operations are performed by the MAC sublayer? (Choose two.)",
        answers: [
          "It is responsible for Media Access Control.",
          "It performs the function of NIC driver software.",
          "It adds a header and trailer to form an OSI Layer 2 PDU.",
          "It handles communication between upper and lower layers.",
          "It adds control information to network protocol layer data."
        ],
        correct: [
          "It is responsible for Media Access Control.",
          "It adds a header and trailer to form an OSI Layer 2 PDU."
        ]
      }
    ]
  }
  ,
  {
    id: "module-8",
    title: "Module 8: Network Layer",
    questions: [
      {
        id: "m8-q1", type: "single",
        question: "A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?",
        answers: ["The cable is not connected properly to the NIC.", "The computer has an invalid IP address.", "The computer has an incorrect subnet mask.", "The computer has an invalid default gateway address."],
        correct: ["The computer has an invalid default gateway address."]
      },
      {
        id: "m8-q2", type: "single",
        question: "Which statement describes a feature of the IP protocol?",
        answers: ["IP encapsulation is modified based on network media.", "IP relies on Layer 2 protocols for transmission error control.", "MAC addresses are used during the IP packet encapsulation.", "IP relies on upper layer services to handle situations of missing or out-of-order packets."],
        correct: ["IP relies on upper layer services to handle situations of missing or out-of-order packets."]
      },
      {
        id: "m8-q3", type: "single",
        question: "Why is NAT not needed in IPv6?",
        answers: ["Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.", "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.", "The problems induced by NAT are solved because the IPv6 header improves packet handling by intermediate routers.", "The end-to-end connectivity problems caused by NAT are solved because the number of routes increases with the number of nodes connected to the Internet."],
        correct: ["Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large."]
      },
      {
        id: "m8-q4", type: "single",
        question: "Which parameter does the router use to choose the path to the destination when there are multiple routes available?",
        answers: ["the lower metric value associated with the destination network", "the lower gateway IP address to get to the destination network", "the higher metric value associated with the destination network", "the higher gateway IP address to get to the destination network"],
        correct: ["the lower metric value associated with the destination network"]
      },
      {
        id: "m8-q5", type: "multi",
        question: "What are two services provided by the OSI network layer? (Choose two.)",
        answers: ["performing error detection", "routing packets toward the destination", "encapsulating PDUs from the transport layer", "placement of frames on the media", "collision detection"],
        correct: ["routing packets toward the destination", "encapsulating PDUs from the transport layer"]
      },
      {
        id: "m8-q6", type: "single",
        question: "What is a basic characteristic of the IP protocol?",
        answers: ["connectionless", "media dependent", "user data segmentation", "reliable end-to-end delivery"],
        correct: ["connectionless"]
      },
      {
        id: "m8-q7", type: "single",
        question: "Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?",
        answers: ["Time-to-Live", "Sequence Number", "Acknowledgment Number", "Differentiated Services"],
        correct: ["Time-to-Live"]
      },
      {
        id: "m8-q8", type: "single",
        question: "What is one advantage that the IPv6 simplified header offers over IPv4?",
        answers: ["smaller-sized header", "little requirement for processing checksums", "smaller-sized source and destination IP addresses", "efficient packet handling"],
        correct: ["efficient packet handling"]
      },
      {
        id: "m8-q9", type: "single",
        question: "What IPv4 header field identifies the upper layer protocol carried in the packet?",
        answers: ["Protocol", "Identification", "Version", "Differentiated Services"],
        correct: ["Protocol"]
      },
      {
        id: "m8-q10", type: "single",
        question: "What routing table entry has a next hop address associated with a destination network?",
        answers: ["directly-connected routes", "local routes", "remote routes", "C and L source routes"],
        correct: ["remote routes"]
      },
      {
        id: "m8-q11", type: "single",
        question: "When transporting data from real-time applications such as streaming video, which IPv6 header field can inform routers to maintain the same path for packets in the same conversation?",
        answers: ["Next Header", "Flow Label", "Traffic Class", "Differentiated Services"],
        correct: ["Flow Label"]
      },
      {
        id: "m8-q12", type: "multi",
        question: "Which two functions are primary functions of a router? (Choose two.)",
        answers: ["packet forwarding", "microsegmentation", "domain name resolution", "path selection", "flow control"],
        correct: ["packet forwarding", "path selection"]
      },
      {
        id: "m8-q13", type: "single",
        question: "What will happen if the default gateway address is incorrectly configured on a host?",
        answers: ["The host cannot communicate with other hosts in the local network.", "The switch will not forward packets initiated by the host.", "The host will have to use ARP to determine the correct address of the default gateway.", "The host cannot communicate with hosts in other networks."],
        correct: ["The host cannot communicate with hosts in other networks."]
      },
      {
        id: "m8-q14", type: "single",
        question: "Which term describes a field in the IPv4 packet header used to limit the lifetime of a packet?",
        answers: ["TTL", "source IPv4 address", "protocol", "header checksum"],
        correct: ["TTL"]
      },
      {
        id: "m8-q15", type: "single",
        question: "Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?",
        answers: ["version", "source IPv4 address", "protocol", "TTL"],
        correct: ["version"]
      }
    ]
  },
  {
    id: "module-9",
    title: "Module 9: Address Resolution",
    questions: [
      {
        id: "m9-q1", type: "single",
        question: "What statement describes the function of the Address Resolution Protocol?",
        answers: ["ARP is used to discover the IP address of any host on a different network.", "ARP is used to discover the IP address of any host on the local network.", "ARP is used to discover the MAC address of any host on a different network.", "ARP is used to discover the MAC address of any host on the local network."],
        correct: ["ARP is used to discover the MAC address of any host on the local network."]
      },
      {
        id: "m9-q2", type: "multi",
        question: "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
        answers: ["The frame has the broadcast address as the destination address.", "The destination address is unknown to the switch.", "The source address in the frame header is the broadcast address.", "The source address in the frame is a multicast address.", "The destination address in the frame is a known unicast address."],
        correct: ["The frame has the broadcast address as the destination address.", "The destination address is unknown to the switch."]
      },
      {
        id: "m9-q3", type: "single",
        question: "Which statement describes the treatment of ARP requests on the local link?",
        answers: ["They must be forwarded by all routers on the local network.", "They are received and processed by every device on the local network.", "They are dropped by all switches on the local network.", "They are received and processed only by the target device."],
        correct: ["They are received and processed by every device on the local network."]
      },
      {
        id: "m9-q4", type: "single",
        question: "Which destination address is used in an ARP request frame?",
        answers: ["0.0.0.0", "255.255.255.255", "FFFF.FFFF.FFFF", "the physical address of the destination host"],
        correct: ["FFFF.FFFF.FFFF"]
      },
      {
        id: "m9-q5", type: "single",
        question: "A network technician issues the arp -d * command on a PC after the router connected to the LAN is reconfigured. What is the result?",
        answers: ["The ARP cache is cleared.", "The current content of the ARP cache is displayed.", "The detailed information of the ARP cache is displayed.", "The ARP cache is synchronized with the router interface."],
        correct: ["The ARP cache is cleared."]
      },
      {
        id: "m9-q6", type: "multi",
        question: "Which two types of IPv6 messages are used in place of ARP for address resolution? (Choose two.)",
        answers: ["anycast", "broadcast", "echo reply", "echo request", "neighbor solicitation", "neighbor advertisement"],
        correct: ["neighbor solicitation", "neighbor advertisement"]
      },
      {
        id: "m9-q7", type: "single",
        question: "What is the aim of an ARP spoofing attack?",
        answers: ["to flood the network with ARP reply broadcasts", "to fill switch MAC address tables with bogus addresses", "to associate IP addresses to the wrong MAC address", "to overwhelm network hosts with ARP requests"],
        correct: ["to associate IP addresses to the wrong MAC address"]
      },
      {
        id: "m9-q8", type: "single",
        question: "Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?",
        answers: ["neighbor table", "ARP cache", "routing table", "MAC address table"],
        correct: ["ARP cache"]
      },
      {
        id: "m9-q9", type: "single",
        question: "What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?",
        answers: ["source MAC address", "source IP address", "destination MAC address", "destination IP address"],
        correct: ["destination MAC address"]
      },
      {
        id: "m9-q10", type: "multi",
        question: "What are two potential network problems that can result from ARP operation? (Choose two.)",
        answers: ["Manually configuring static ARP associations could facilitate ARP poisoning or MAC address spoofing.", "On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.", "Network attackers could manipulate MAC address and IP address mappings in ARP messages to intercept network traffic.", "Large numbers of ARP request broadcasts could cause the host MAC address table to overflow.", "Multiple ARP replies result in the switch MAC address table containing entries that match connected hosts."],
        correct: ["On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.", "Network attackers could manipulate MAC address and IP address mappings in ARP messages to intercept network traffic."]
      }
    ]
  },
  {
    id: "module-10",
    title: "Module 10: Basic Router Configuration",
    questions: [
      {
        id: "m10-q1", type: "single",
        question: "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way to test whether the banner is properly configured?",
        answers: ["Reboot the device.", "Enter CTRL-Z at the privileged mode prompt.", "Exit global configuration mode.", "Exit privileged EXEC mode and press Enter."],
        correct: ["Exit privileged EXEC mode and press Enter."]
      },
      {
        id: "m10-q2", type: "multi",
        question: "What are two functions of NVRAM? (Choose two.)",
        answers: ["to store the routing table", "to retain contents when power is removed", "to store the startup configuration file", "to contain the running configuration file", "to store the ARP table"],
        correct: ["to retain contents when power is removed", "to store the startup configuration file"]
      },
      {
        id: "m10-q3", type: "single",
        question: "A router boots and enters setup mode. What is the reason for this?",
        answers: ["The IOS image is corrupt.", "Cisco IOS is missing from flash memory.", "The configuration file is missing from NVRAM.", "The POST process has detected hardware failure."],
        correct: ["The configuration file is missing from NVRAM."]
      },
      {
        id: "m10-q4", type: "single",
        question: "What happens when the transport input ssh command is entered on the switch vty lines?",
        answers: ["The SSH client on the switch is enabled.", "Communication between the switch and remote users is encrypted.", "The switch requires a username/password combination for remote access.", "The switch requires remote connections via a proprietary client software."],
        correct: ["Communication between the switch and remote users is encrypted."]
      },
      {
        id: "m10-q5", type: "single",
        question: "What is the effect of using the Router# copy running-config startup-config command on a router?",
        answers: ["The contents of ROM will change.", "The contents of RAM will change.", "The contents of NVRAM will change.", "The contents of flash will change."],
        correct: ["The contents of NVRAM will change."]
      },
      {
        id: "m10-q6", type: "multi",
        question: "Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)",
        answers: ["interface fastethernet 0/0", "line vty 0 4", "line console 0", "enable secret cisco", "login", "password cisco"],
        correct: ["line console 0", "login", "password cisco"]
      },
      {
        id: "m10-q7", type: "single",
        question: "Within a production network, what is the purpose of configuring a switch with a default gateway address?",
        answers: ["Hosts connected to the switch can use the switch default gateway address to forward packets to a remote destination.", "A switch must have a default gateway to be accessible by Telnet and SSH.", "The default gateway address is used to forward packets originating from the switch to remote networks.", "It provides a next-hop address for all traffic that flows through the switch."],
        correct: ["The default gateway address is used to forward packets originating from the switch to remote networks."]
      },
      {
        id: "m10-q8", type: "single",
        question: "What is the loopback test used for?",
        answers: ["To verify the device has end-to-end connectivity.", "To verify that DHCP is working correctly.", "To verify that the TCP/IP stack on the device is working correctly.", "To verify that the Ethernet cable is working correctly."],
        correct: ["To verify that the TCP/IP stack on the device is working correctly."]
      },
      {
        id: "m10-q9", type: "single",
        question: "How does a host ensure that packets are directed to the correct network destination?",
        answers: ["They always direct packets to the default gateway, which will be responsible for delivery.", "They send a query packet to the default gateway asking for the best route.", "They keep a local routing table with a route to the loopback interface, a local network route, and a remote default route.", "They search in their own local routing table for a route to the destination and pass this to the default gateway."],
        correct: ["They keep a local routing table with a route to the loopback interface, a local network route, and a remote default route."]
      },
      {
        id: "m10-q10", type: "single",
        question: "What is the purpose of configuring the ip default-gateway command on a switch?",
        answers: ["The switch will have a management interface with that address.", "The switch can be remotely managed from a host on another network.", "The switch can communicate with other hosts on the same network.", "The switch is limited to sending and receiving frames to and from the gateway only."],
        correct: ["The switch can be remotely managed from a host on another network."]
      }
    ]
  },
  {
    id: "module-11",
    title: "Module 11: IPv4 Addressing",
    questions: [
      {
        id: "m11-q1", type: "single",
        question: "How many host addresses are available on the network 192.168.1.0 with a subnet mask of 255.255.255.0?",
        answers: ["254", "255", "256", "512"],
        correct: ["254"]
      },
      {
        id: "m11-q2", type: "single",
        question: "Which subnet mask is represented by /26?",
        answers: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
        correct: ["255.255.255.192"]
      },
      {
        id: "m11-q3", type: "single",
        question: "Which address is the network address for 192.168.1.100 with a /28 mask?",
        answers: ["192.168.1.80", "192.168.1.96", "192.168.1.100", "192.168.1.112"],
        correct: ["192.168.1.96"]
      },
      {
        id: "m11-q4", type: "single",
        question: "A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. What is the broadcast address of this network?",
        answers: ["192.168.1.95", "192.168.1.127", "192.168.1.128", "192.168.1.255"],
        correct: ["192.168.1.127"]
      },
      {
        id: "m11-q5", type: "single",
        question: "An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second usable subnet?",
        answers: ["192.168.1.64 / 255.255.255.192", "192.168.1.0 / 255.255.255.192", "192.168.1.128 / 255.255.255.192", "192.168.1.32 / 255.255.255.192"],
        correct: ["192.168.1.64 / 255.255.255.192"]
      },
      {
        id: "m11-q6", type: "single",
        question: "Which type of address is 192.168.1.255 in the 192.168.1.0/24 network?",
        answers: ["network address", "host address", "broadcast address", "multicast address"],
        correct: ["broadcast address"]
      },
      {
        id: "m11-q7", type: "single",
        question: "How many bits are borrowed from the host portion to create 4 subnets from a /24 network?",
        answers: ["1", "2", "3", "4"],
        correct: ["2"]
      },
      {
        id: "m11-q8", type: "single",
        question: "Which address range is reserved for private use according to RFC 1918?",
        answers: ["10.0.0.0 – 10.255.255.255", "172.16.0.0 – 172.31.255.255", "192.168.0.0 – 192.168.255.255", "All of the above"],
        correct: ["All of the above"]
      },
      {
        id: "m11-q9", type: "single",
        question: "What is the prefix length notation for the subnet mask 255.255.255.240?",
        answers: ["/25", "/26", "/27", "/28"],
        correct: ["/28"]
      },
      {
        id: "m11-q10", type: "single",
        question: "How many usable host addresses exist in a /30 subnet?",
        answers: ["0", "2", "4", "6"],
        correct: ["2"]
      },
      {
        id: "m11-q11", type: "single",
        question: "Which class of IPv4 address uses the range 128.0.0.0 to 191.255.255.255?",
        answers: ["Class A", "Class B", "Class C", "Class D"],
        correct: ["Class B"]
      },
      {
        id: "m11-q12", type: "single",
        question: "What is the purpose of subnetting?",
        answers: ["to provide more IP addresses beyond the original IPv4 space", "to divide a network into smaller logical networks", "to increase the size of the broadcast domain", "to eliminate the need for a default gateway"],
        correct: ["to divide a network into smaller logical networks"]
      },
      {
        id: "m11-q13", type: "single",
        question: "Which IPv4 address is a valid host address in the 192.168.0.128/25 subnet?",
        answers: ["192.168.0.0", "192.168.0.127", "192.168.0.200", "192.168.0.255"],
        correct: ["192.168.0.200"]
      },
      {
        id: "m11-q14", type: "single",
        question: "What is the network address for 172.16.45.14/20?",
        answers: ["172.16.32.0", "172.16.40.0", "172.16.45.0", "172.16.48.0"],
        correct: ["172.16.32.0"]
      }
    ]
  }
  ,
  {
    id: "module-12",
    title: "Module 12: IPv6 Addressing",
    questions: [
      {
        id: "m12-q1", type: "single",
        question: "What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?",
        answers: ["2001:DB8:0:AB00::1234", "2001:DB8:0:AB::1234", "2001:DB8::AB00::1234", "2001:DB8:0:AB:0:1234"],
        correct: ["2001:DB8:0:AB00::1234"]
      },
      {
        id: "m12-q2", type: "single",
        question: "What is the prefix associated with the IPv6 address 2001:DB8:D15:EA:CC44::1/64?",
        answers: ["2001::/64", "2001:DB8::/64", "2001:DB8:D15:EA::/64", "2001:DB8:D15:EA:CC44::/64"],
        correct: ["2001:DB8:D15:EA::/64"]
      },
      {
        id: "m12-q3", type: "single",
        question: "What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?",
        answers: ["Global unicast", "Link-local", "Loopback", "Unique local"],
        correct: ["Link-local"]
      },
      {
        id: "m12-q4", type: "single",
        question: "Which IPv6 network prefix is only intended for local links and cannot be routed?",
        answers: ["2001::/3", "FC00::/7", "FE80::/10", "FF00::/12"],
        correct: ["FE80::/10"]
      },
      {
        id: "m12-q5", type: "single",
        question: "What is the purpose of the command ping ::1?",
        answers: [
          "It tests the internal configuration of an IPv6 host.",
          "It tests the broadcast capability of all hosts on the subnet.",
          "It tests the multicast connectivity to all hosts on the subnet.",
          "It tests the reachability of the default gateway for the network."
        ],
        correct: ["It tests the internal configuration of an IPv6 host."]
      },
      {
        id: "m12-q6", type: "single",
        question: "What is the interface ID of the IPv6 address 2001:DB8::1000:A9CD:47FF:FE57:FE94/64?",
        answers: ["FE94", "FE57:FE94", "47FF:FE57:FE94", "A9CD:47FF:FE57:FE94"],
        correct: ["A9CD:47FF:FE57:FE94"]
      },
      {
        id: "m12-q7", type: "single",
        question: "What is the network address for the IPv6 address 2001:DB8:AA04:B5::1/64?",
        answers: ["2001::/64", "2001:DB8::/64", "2001:DB8:AA04::/64", "2001:DB8:AA04:B5::/64"],
        correct: ["2001:DB8:AA04:B5::/64"]
      },
      {
        id: "m12-q8", type: "single",
        question: "Which address type is not supported in IPv6?",
        answers: ["Private", "Multicast", "Unicast", "Broadcast"],
        correct: ["Broadcast"]
      },
      {
        id: "m12-q9", type: "single",
        question: "What is indicated by a successful ping to the ::1 IPv6 address?",
        answers: [
          "The host is cabled properly.",
          "The default gateway address is correctly configured.",
          "All hosts on the local link are available.",
          "IP is properly installed on the host."
        ],
        correct: ["IP is properly installed on the host."]
      },
      {
        id: "m12-q10", type: "single",
        question: "What is the most compressed representation of the IPv6 address 2001:0db8:0000:abcd:0000:0000:0000:0001?",
        answers: ["2001:0db8:abcd::1", "2001:db8:0:abcd::1", "2001:0db8:abcd::0001", "2001:db8::abcd:0:1"],
        correct: ["2001:db8:0:abcd::1"]
      },
      {
        id: "m12-q11", type: "single",
        question: "What is the minimum configuration for a router interface that is enabled for IPv6?",
        answers: [
          "To have a link-local IPv6 address",
          "To have both an IPv4 and an IPv6 address",
          "To have a self-generated loopback address",
          "To have both a link-local and a global unicast IPv6 address"
        ],
        correct: ["To have a link-local IPv6 address"]
      },
      {
        id: "m12-q12", type: "multi",
        question: "What are three parts of an IPv6 global unicast address? (Choose three.)",
        answers: [
          "An interface ID that is used to identify the local network for a particular host",
          "A global routing prefix that is used to identify the network portion of the address provided by an ISP",
          "A subnet ID that is used to identify networks inside of the local enterprise site",
          "A global routing prefix that is used to identify the portion of the network address provided by a local administrator",
          "An interface ID that is used to identify the local host on the network"
        ],
        correct: [
          "A global routing prefix that is used to identify the network portion of the address provided by an ISP",
          "A subnet ID that is used to identify networks inside of the local enterprise site",
          "An interface ID that is used to identify the local host on the network"
        ]
      },
      {
        id: "m12-q13", type: "single",
        question: "Your organization is issued the IPv6 prefix of 2001:db8:130f::/48. How many bits are available to create /64 subnetworks?",
        answers: ["8", "16", "80", "128"],
        correct: ["16"]
      },
      {
        id: "m12-q14", type: "single",
        question: "Which type of IPv6 address is not routable and used only for communication on a single subnet?",
        answers: ["Global unicast address", "Link-local address", "Loopback address", "Unique local address"],
        correct: ["Link-local address"]
      }
    ]
  },
  {
    id: "module-13",
    title: "Module 13: ICMP",
    questions: [
      {
        id: "m13-q1", type: "single",
        question: "A technician suspects a defective node in the network path causing packets to be dropped. What command can identify the faulty node?",
        answers: ["tracert", "ping", "ipconfig /flushdns", "ipconfig /displaydns"],
        correct: ["tracert"]
      },
      {
        id: "m13-q2", type: "single",
        question: "A helpdesk technician asks a user to ping the IP address of the default gateway. What is the purpose?",
        answers: [
          "To obtain a dynamic IP address from the server",
          "To request that gateway forward the connection request to the file server",
          "To test that the host has the capability to reach hosts on other networks",
          "To resolve the domain name of the file server to its IP address"
        ],
        correct: ["To test that the host has the capability to reach hosts on other networks"]
      },
      {
        id: "m13-q3", type: "single",
        question: "What is a function of the tracert command that differs from the ping command?",
        answers: [
          "The tracert command reaches the destination faster.",
          "The tracert command shows the information of routers in the path.",
          "The tracert command sends one ICMP message to each hop in the path.",
          "The tracert command is used to test the connectivity between two devices."
        ],
        correct: ["The tracert command shows the information of routers in the path."]
      },
      {
        id: "m13-q4", type: "single",
        question: "Which ICMP message is used by the traceroute utility during the process of finding the path between two end hosts?",
        answers: ["Redirect", "Ping", "Time exceeded", "Destination unreachable"],
        correct: ["Time exceeded"]
      },
      {
        id: "m13-q5", type: "single",
        question: "Which utility uses the Internet Control Messaging Protocol (ICMP)?",
        answers: ["RIP", "DNS", "Ping", "NTP"],
        correct: ["Ping"]
      },
      {
        id: "m13-q6", type: "single",
        question: "Which protocol is used by IPv4 and IPv6 to provide error messaging?",
        answers: ["ICMP", "NDP", "ARP", "DHCP"],
        correct: ["ICMP"]
      },
      {
        id: "m13-q7", type: "single",
        question: "On a Cisco router, which symbol indicates that a time expired during the wait for an ICMP echo reply message?",
        answers: ["!", ".", "U", "$"],
        correct: ["."]
      },
      {
        id: "m13-q8", type: "multi",
        question: "Which two things can be determined by using the ping command? (Choose two.)",
        answers: [
          "The number of routers between the source and destination device",
          "The IP address of the router nearest the destination device",
          "The average time it takes a packet to reach the destination and for the response to return to the source",
          "The destination device is reachable through the network",
          "The average time it takes each router in the path between source and destination to respond"
        ],
        correct: [
          "The average time it takes a packet to reach the destination and for the response to return to the source",
          "The destination device is reachable through the network"
        ]
      },
      {
        id: "m13-q9", type: "single",
        question: "A user issues ping 127.0.0.1 and receives four positive replies. What conclusion can be drawn?",
        answers: [
          "The PC can access the network. The problem exists beyond the local network.",
          "The IP address obtained from the DHCP server is correct.",
          "The PC can access the Internet. However, the web browser may not work.",
          "The TCP/IP implementation is functional."
        ],
        correct: ["The TCP/IP implementation is functional."]
      },
      {
        id: "m13-q10", type: "single",
        question: "Which command can be used to test connectivity between two devices using echo request and echo reply messages?",
        answers: ["netstat", "ipconfig", "ICMP", "ping"],
        correct: ["ping"]
      },
      {
        id: "m13-q11", type: "single",
        question: "What field content is used by ICMPv6 to determine that a packet has expired?",
        answers: ["TTL field", "CRC field", "Hop Limit field", "Time Exceeded field"],
        correct: ["Hop Limit field"]
      },
      {
        id: "m13-q12", type: "single",
        question: "Which protocol provides feedback from the destination host to the source host about errors in packet delivery?",
        answers: ["ARP", "BOOTP", "DNS", "ICMP"],
        correct: ["ICMP"]
      },
      {
        id: "m13-q13", type: "single",
        question: "A network administrator can ping www.cisco.com but cannot ping the company web server at an ISP in another city. Which tool would identify the specific router where the packet was lost?",
        answers: ["ipconfig", "netstat", "telnet", "traceroute"],
        correct: ["traceroute"]
      },
      {
        id: "m13-q14", type: "single",
        question: "What message is sent by a host to check the uniqueness of an IPv6 address before using it?",
        answers: ["Neighbor solicitation", "ARP request", "Echo request", "Router solicitation"],
        correct: ["Neighbor solicitation"]
      }
    ]
  },
  {
    id: "module-14",
    title: "Module 14: Transport Layer",
    questions: [
      {
        id: "m14-q1", type: "single",
        question: "Which transport layer feature is used to establish a connection-oriented session?",
        answers: ["UDP ACK flag", "TCP 3-way handshake", "UDP sequence number", "TCP port number"],
        correct: ["TCP 3-way handshake"]
      },
      {
        id: "m14-q2", type: "single",
        question: "What is the complete range of TCP and UDP well-known ports?",
        answers: ["0 to 255", "0 to 1023", "256 to 1023", "1024 to 49151"],
        correct: ["0 to 1023"]
      },
      {
        id: "m14-q3", type: "single",
        question: "What is a socket?",
        answers: [
          "The combination of the source and destination IP address and source and destination Ethernet address",
          "The combination of a source IP address and port number or a destination IP address and port number",
          "The combination of the source and destination sequence and acknowledgment numbers",
          "The combination of the source and destination sequence numbers and port numbers"
        ],
        correct: ["The combination of a source IP address and port number or a destination IP address and port number"]
      },
      {
        id: "m14-q4", type: "single",
        question: "What happens if part of an FTP message is not delivered to the destination?",
        answers: [
          "The message is lost because FTP does not use a reliable delivery method.",
          "The FTP source host sends a query to the destination host.",
          "The part of the FTP message that was lost is re-sent.",
          "The entire FTP message is re-sent."
        ],
        correct: ["The part of the FTP message that was lost is re-sent."]
      },
      {
        id: "m14-q5", type: "single",
        question: "What type of applications are best suited for using UDP?",
        answers: [
          "Applications that are sensitive to delay",
          "Applications that need reliable delivery",
          "Applications that require retransmission of lost segments",
          "Applications that are sensitive to packet loss"
        ],
        correct: ["Applications that are sensitive to delay"]
      },
      {
        id: "m14-q6", type: "single",
        question: "Network congestion causes TCP segments to be lost. What is one way TCP addresses this?",
        answers: [
          "The source decreases the amount of data it transmits before receiving an acknowledgement.",
          "The source decreases the window size to decrease the rate of transmission from the destination.",
          "The destination decreases the window size.",
          "The destination sends fewer acknowledgement messages to conserve bandwidth."
        ],
        correct: ["The source decreases the amount of data it transmits before receiving an acknowledgement."]
      },
      {
        id: "m14-q7", type: "multi",
        question: "Which two operations are provided by TCP but not by UDP? (Choose two.)",
        answers: [
          "Identifying the applications",
          "Acknowledging received data",
          "Identifying individual conversations",
          "Retransmitting any unacknowledged data",
          "Reconstructing data in the order received"
        ],
        correct: ["Acknowledging received data", "Retransmitting any unacknowledged data"]
      },
      {
        id: "m14-q8", type: "single",
        question: "What is the purpose of using a source port number in a TCP communication?",
        answers: [
          "To notify the remote device that the conversation is over",
          "To assemble the segments that arrived out of order",
          "To keep track of multiple conversations between devices",
          "To inquire for a non-received segment"
        ],
        correct: ["To keep track of multiple conversations between devices"]
      },
      {
        id: "m14-q9", type: "multi",
        question: "Which two flags in the TCP header are used in a TCP three-way handshake? (Choose two.)",
        answers: ["ACK", "FIN", "PSH", "RST", "SYN", "URG"],
        correct: ["ACK", "SYN"]
      },
      {
        id: "m14-q10", type: "single",
        question: "What TCP mechanism allows a device to continuously send segments as long as it is also receiving acknowledgements?",
        answers: ["Three-way handshake", "Socket pair", "Two-way handshake", "Sliding window"],
        correct: ["Sliding window"]
      },
      {
        id: "m14-q11", type: "single",
        question: "Which action is performed by a client when establishing communication with a server via UDP?",
        answers: [
          "The client sets the window size for the session.",
          "The client sends an ISN to the server to start the 3-way handshake.",
          "The client randomly selects a source port number.",
          "The client sends a synchronization segment to begin the session."
        ],
        correct: ["The client randomly selects a source port number."]
      },
      {
        id: "m14-q12", type: "multi",
        question: "Which two services or protocols use UDP for fast transmission and low overhead? (Choose two.)",
        answers: ["FTP", "DNS", "HTTP", "POP3", "VoIP"],
        correct: ["DNS", "VoIP"]
      },
      {
        id: "m14-q13", type: "single",
        question: "Which number or set of numbers represents a socket?",
        answers: ["01-23-45-67-89-AB", "21", "192.168.1.1:80", "10.1.1.15"],
        correct: ["192.168.1.1:80"]
      },
      {
        id: "m14-q14", type: "single",
        question: "What is a responsibility of transport layer protocols?",
        answers: [
          "Providing network access",
          "Tracking individual conversations",
          "Determining the best path to forward a packet",
          "Translating private IP addresses to public IP addresses"
        ],
        correct: ["Tracking individual conversations"]
      }
    ]
  },
  {
    id: "module-15",
    title: "Module 15: Application Layer",
    questions: [
      {
        id: "m15-q1", type: "single",
        question: "On a home network, which device is most likely to provide dynamic IPv4 addressing to clients?",
        answers: ["A dedicated file server", "A home router", "An ISP DHCP server", "A DNS server"],
        correct: ["A home router"]
      },
      {
        id: "m15-q2", type: "single",
        question: "What part of the URL http://www.cisco.com/index.html represents the top-level DNS domain?",
        answers: [".com", "www", "http", "index"],
        correct: [".com"]
      },
      {
        id: "m15-q3", type: "multi",
        question: "What are two characteristics of the application layer of the TCP/IP model? (Choose two.)",
        answers: [
          "Responsibility for logical addressing",
          "Responsibility for physical addressing",
          "The creation and maintenance of dialogue between source and destination applications",
          "Closest to the end user"
        ],
        correct: [
          "The creation and maintenance of dialogue between source and destination applications",
          "Closest to the end user"
        ]
      },
      {
        id: "m15-q4", type: "single",
        question: "What message type is used by an HTTP client to request data from a web server?",
        answers: ["GET", "POST", "PUT", "ACK"],
        correct: ["GET"]
      },
      {
        id: "m15-q5", type: "single",
        question: "Which protocol can be used to transfer messages from an email server to an email client?",
        answers: ["SMTP", "POP3", "SNMP", "HTTP"],
        correct: ["POP3"]
      },
      {
        id: "m15-q6", type: "single",
        question: "Which application layer protocol is used to provide file-sharing and print services to Microsoft applications?",
        answers: ["HTTP", "SMTP", "DHCP", "SMB"],
        correct: ["SMB"]
      },
      {
        id: "m15-q7", type: "multi",
        question: "Which three protocols or standards are used at the application layer of the TCP/IP model? (Choose three.)",
        answers: ["TCP", "HTTP", "MPEG", "GIF", "IP", "UDP"],
        correct: ["HTTP", "MPEG", "GIF"]
      },
      {
        id: "m15-q8", type: "single",
        question: "Why is DHCP for IPv4 preferred for use on large networks?",
        answers: [
          "Large networks send more requests for domain to IP address resolution.",
          "DHCP uses a reliable transport layer protocol.",
          "It prevents sharing of files that are copyrighted.",
          "It is a more efficient way to manage IPv4 addresses than static address assignment.",
          "Hosts on large networks require more IPv4 addressing configuration settings."
        ],
        correct: ["It is a more efficient way to manage IPv4 addresses than static address assignment."]
      },
      {
        id: "m15-q9", type: "single",
        question: "An author uploads a document from a PC to a file server. What role is the personal computer assuming?",
        answers: ["Client", "Master", "Server", "Slave"],
        correct: ["Client"]
      },
      {
        id: "m15-q10", type: "single",
        question: "Which statement is true about FTP?",
        answers: [
          "The client can choose if FTP is going to establish one or two connections with the server.",
          "The client can download data from or upload data to the server.",
          "FTP is a peer-to-peer application.",
          "FTP does not provide reliability during data transmission."
        ],
        correct: ["The client can download data from or upload data to the server."]
      },
      {
        id: "m15-q11", type: "single",
        question: "A wireless host needs to request an IPv4 address. What protocol would be used?",
        answers: ["FTP", "HTTP", "DHCP", "ICMP", "SNMP"],
        correct: ["DHCP"]
      },
      {
        id: "m15-q12", type: "single",
        question: "When retrieving email messages, which protocol allows easy centralized storage and backup for a small to medium-sized business?",
        answers: ["IMAP", "POP", "SMTP", "HTTPS"],
        correct: ["IMAP"]
      },
      {
        id: "m15-q13", type: "single",
        question: "Which protocol uses encryption?",
        answers: ["DHCP", "DNS", "FTP", "HTTPS"],
        correct: ["HTTPS"]
      },
      {
        id: "m15-q14", type: "multi",
        question: "Which two tasks can be performed by a local DNS server? (Choose two.)",
        answers: [
          "Providing IP addresses to local hosts",
          "Allowing data transfer between two network devices",
          "Mapping name-to-IP addresses for internal hosts",
          "Forwarding name resolution requests between servers",
          "Retrieving email messages"
        ],
        correct: [
          "Mapping name-to-IP addresses for internal hosts",
          "Forwarding name resolution requests between servers"
        ]
      }
    ]
  },
  {
    id: "module-16",
    title: "Module 16: Network Security Fundamentals",
    questions: [
      {
        id: "m16-q1", type: "single",
        question: "Which component is designed to protect against unauthorized communications to and from a computer?",
        answers: ["Security center", "Port scanner", "Antimalware", "Antivirus", "Firewall"],
        correct: ["Firewall"]
      },
      {
        id: "m16-q2", type: "single",
        question: "Which command will block login attempts on RouterA for 30 seconds if there are 2 failed login attempts within 10 seconds?",
        answers: [
          "login block-for 10 attempts 2 within 30",
          "login block-for 30 attempts 2 within 10",
          "login block-for 2 attempts 30 within 10",
          "login block-for 30 attempts 10 within 2"
        ],
        correct: ["login block-for 30 attempts 2 within 10"]
      },
      {
        id: "m16-q3", type: "single",
        question: "What is the purpose of the network security accounting function?",
        answers: [
          "To require users to prove who they are",
          "To determine which resources a user can access",
          "To keep track of the actions of a user",
          "To provide challenge and response questions"
        ],
        correct: ["To keep track of the actions of a user"]
      },
      {
        id: "m16-q4", type: "single",
        question: "What type of attack may involve the use of tools such as nslookup and fping?",
        answers: ["Access attack", "Reconnaissance attack", "Denial of service attack", "Worm attack"],
        correct: ["Reconnaissance attack"]
      },
      {
        id: "m16-q5", type: "single",
        question: "Which benefit does SSH offer over Telnet for remotely managing a router?",
        answers: ["Encryption", "TCP usage", "Authorization", "Connections via multiple VTY lines"],
        correct: ["Encryption"]
      },
      {
        id: "m16-q6", type: "single",
        question: "What is one of the most effective security tools available for protecting users from external threats?",
        answers: ["Firewalls", "Routers that run AAA services", "Patch servers", "Password encryption techniques"],
        correct: ["Firewalls"]
      },
      {
        id: "m16-q7", type: "single",
        question: "Which type of network threat is intended to prevent authorized users from accessing resources?",
        answers: ["DoS attacks", "Access attacks", "Reconnaissance attacks", "Trust exploitation"],
        correct: ["DoS attacks"]
      },
      {
        id: "m16-q8", type: "multi",
        question: "Which three services are provided by the AAA framework? (Choose three.)",
        answers: ["Accounting", "Automation", "Authorization", "Authentication", "Autobalancing", "Autoconfiguration"],
        correct: ["Accounting", "Authorization", "Authentication"]
      },
      {
        id: "m16-q9", type: "single",
        question: "Which malicious code attack is self-contained and tries to exploit a specific vulnerability in a system?",
        answers: ["Virus", "Worm", "Trojan horse", "Social engineering"],
        correct: ["Worm"]
      },
      {
        id: "m16-q10", type: "single",
        question: "Routers and switches malfunction after an AC unit failure. What type of threat is this?",
        answers: ["Configuration", "Environmental", "Electrical", "Maintenance"],
        correct: ["Environmental"]
      },
      {
        id: "m16-q11", type: "single",
        question: "What does the term vulnerability mean?",
        answers: [
          "A weakness that makes a target susceptible to an attack",
          "A computer that contains sensitive information",
          "A method of attack to exploit a target",
          "A known target or victim machine"
        ],
        correct: ["A weakness that makes a target susceptible to an attack"]
      },
      {
        id: "m16-q12", type: "multi",
        question: "What three configuration steps must be performed to implement SSH access to a router? (Choose three.)",
        answers: [
          "A password on the console line",
          "An IP domain name",
          "A user account",
          "An enable mode password",
          "A unique hostname",
          "An encrypted password"
        ],
        correct: ["An IP domain name", "A user account", "A unique hostname"]
      },
      {
        id: "m16-q13", type: "single",
        question: "What is the objective of a network reconnaissance attack?",
        answers: [
          "Discovery and mapping of systems",
          "Unauthorized manipulation of data",
          "Disabling network systems or services",
          "Denying access to resources by legitimate users"
        ],
        correct: ["Discovery and mapping of systems"]
      },
      {
        id: "m16-q14", type: "single",
        question: "A network administrator needs to ensure local computers cannot ping each other. Which settings can accomplish this task?",
        answers: ["Smartcard settings", "Firewall settings", "MAC address settings", "File system settings"],
        correct: ["Firewall settings"]
      },
      {
        id: "m16-q15", type: "single",
        question: "What characteristic uniquely describes an SSH connection to a switch?",
        answers: [
          "Out-of-band access to a switch through the use of a virtual terminal with password authentication",
          "Remote access to the switch through the use of a telephone dialup connection",
          "On-site access to a switch through the use of a directly connected PC and a console cable",
          "Remote access to a switch where data is encrypted during the session",
          "Direct access to the switch through the use of a terminal emulation program"
        ],
        correct: ["Remote access to a switch where data is encrypted during the session"]
      }
    ]
  }
  ,
  {
    id: "module-17",
    title: "Module 17: Build a Small Network",
    questions: [
      {
        id: "m17-q1", type: "single",
        question: "Which example of malicious code would be classified as a Trojan horse?",
        answers: [
          "Malware that was written to look like a video game",
          "Malware that requires manual user intervention to spread between systems",
          "Malware that attaches itself to a legitimate program and spreads to other programs when launched",
          "Malware that can automatically spread from one system to another by exploiting a vulnerability"
        ],
        correct: ["Malware that was written to look like a video game"]
      },
      {
        id: "m17-q2", type: "single",
        question: "What is the difference between a virus and a worm?",
        answers: [
          "Viruses self-replicate but worms do not.",
          "Worms self-replicate but viruses do not.",
          "Worms require a host file but viruses do not.",
          "Viruses hide in legitimate programs but worms do not."
        ],
        correct: ["Worms self-replicate but viruses do not."]
      },
      {
        id: "m17-q3", type: "single",
        question: "Which attack involves a compromise of data that occurs between two end points?",
        answers: ["Denial-of-service", "Man-in-the-middle attack", "Extraction of security parameters", "Username enumeration"],
        correct: ["Man-in-the-middle attack"]
      },
      {
        id: "m17-q4", type: "single",
        question: "Which type of attack involves an adversary attempting to gather information about a network to identify vulnerabilities?",
        answers: ["Reconnaissance", "DoS", "Dictionary", "Man-in-the-middle"],
        correct: ["Reconnaissance"]
      },
      {
        id: "m17-q5", type: "single",
        question: "What is the purpose of the network security authentication function?",
        answers: [
          "To require users to prove who they are",
          "To determine which resources a user can access",
          "To keep track of the actions of a user",
          "To provide challenge and response questions"
        ],
        correct: ["To require users to prove who they are"]
      },
      {
        id: "m17-q6", type: "single",
        question: "Which firewall feature ensures that packets coming into a network are legitimate responses to requests from internal hosts?",
        answers: ["Stateful packet inspection", "URL filtering", "Application filtering", "Packet filtering"],
        correct: ["Stateful packet inspection"]
      },
      {
        id: "m17-q7", type: "single",
        question: "When applied to a router, which command would help mitigate brute-force password attacks?",
        answers: [
          "exec-timeout 30",
          "service password-encryption",
          "banner motd $Max failed logins = 5$",
          "login block-for 60 attempts 5 within 60"
        ],
        correct: ["login block-for 60 attempts 5 within 60"]
      },
      {
        id: "m17-q8", type: "single",
        question: "What feature of SSH makes it more secure than Telnet for a device management connection?",
        answers: [
          "Confidentiality with IPsec",
          "Stronger password requirement",
          "Random one-time port connection",
          "Login information and data encryption"
        ],
        correct: ["Login information and data encryption"]
      },
      {
        id: "m17-q9", type: "single",
        question: "What is the role of an IPS?",
        answers: [
          "Detecting and blocking of attacks in real time",
          "Connecting global threat information to Cisco network security devices",
          "Authenticating and validating traffic",
          "Filtering of nefarious websites"
        ],
        correct: ["Detecting and blocking of attacks in real time"]
      },
      {
        id: "m17-q10", type: "single",
        question: "What is an accurate description of redundancy?",
        answers: [
          "Configuring a router with a complete MAC address database to ensure all frames can be forwarded",
          "Configuring a switch with security to ensure all traffic through an interface is filtered",
          "Designing a network to use multiple virtual devices to ensure all traffic uses the best path",
          "Designing a network to use multiple paths between switches to ensure no single point of failure"
        ],
        correct: ["Designing a network to use multiple paths between switches to ensure no single point of failure"]
      },
      {
        id: "m17-q11", type: "multi",
        question: "A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services need to be accommodated? (Choose two.)",
        answers: ["Voice", "Video", "Instant messaging", "FTP", "SNMP"],
        correct: ["Voice", "Video"]
      },
      {
        id: "m17-q12", type: "single",
        question: "What is the purpose of using a protocol analyzer to capture network traffic before a network upgrade?",
        answers: [
          "To identify the source and destination of local network traffic",
          "To capture the Internet connection bandwidth requirement",
          "To document and analyze network traffic requirements on each network segment",
          "To establish a baseline for security analysis after the network is upgraded"
        ],
        correct: ["To document and analyze network traffic requirements on each network segment"]
      },
      {
        id: "m17-q13", type: "single",
        question: "A ping to 10.1.1.1 returns only dots (.). What does this output indicate?",
        answers: [
          "Connectivity to the remote device was successful.",
          "A router along the path did not have a route to the destination.",
          "A ping packet is being blocked by a security device along the path.",
          "The connection timed out while waiting for a reply from the remote device."
        ],
        correct: ["The connection timed out while waiting for a reply from the remote device."]
      },
      {
        id: "m17-q14", type: "single",
        question: "Which statement is true about Cisco IOS ping indicators?",
        answers: [
          "'!' indicates that the ping was unsuccessful and the device may have issues finding a DNS server.",
          "'U' may indicate that a router along the path did not contain a route to the destination address.",
          "'.' indicates that the ping was successful but the response time was longer than normal.",
          "A combination of '.' and '!' indicates a router along the path responded with ICMP unreachable."
        ],
        correct: ["'U' may indicate that a router along the path did not contain a route to the destination address."]
      },
      {
        id: "m17-q15", type: "single",
        question: "Why would a network administrator use the tracert utility?",
        answers: [
          "To determine the active TCP connections on a PC",
          "To check information about a DNS name in the DNS server",
          "To identify where a packet was lost or delayed on a network",
          "To display the IP address, default gateway, and DNS server address for a PC"
        ],
        correct: ["To identify where a packet was lost or delayed on a network"]
      },
      {
        id: "m17-q16", type: "single",
        question: "A ping fails between router R1 and directly connected router R2. Why would an administrator issue the show cdp neighbors command?",
        answers: [
          "The administrator suspects a virus because the ping command did not work.",
          "The administrator wants to verify Layer 2 connectivity.",
          "The administrator wants to verify the IP address configured on router R2.",
          "The administrator wants to determine if connectivity exists from a non-directly connected network."
        ],
        correct: ["The administrator wants to verify Layer 2 connectivity."]
      },
      {
        id: "m17-q17", type: "single",
        question: "Which command should be used to find the IP address information, host name, and IOS version of neighboring network devices?",
        answers: ["show version", "show ip route", "show interfaces", "show cdp neighbors detail"],
        correct: ["show cdp neighbors detail"]
      },
      {
        id: "m17-q18", type: "single",
        question: "What information about a Cisco router can be verified using the show version command?",
        answers: [
          "The routing protocol version that is enabled",
          "The value of the configuration register",
          "The operational status of serial interfaces",
          "The administrative distance used to reach networks"
        ],
        correct: ["The value of the configuration register"]
      },
      {
        id: "m17-q19", type: "single",
        question: "Which command allows log messages to be displayed on remotely connected sessions using Telnet or SSH?",
        answers: ["debug all", "logging synchronous", "show running-config", "terminal monitor"],
        correct: ["terminal monitor"]
      },
      {
        id: "m17-q20", type: "single",
        question: "After identifying a network problem through a conversation with a user, what is the administrator's next step in structured troubleshooting?",
        answers: [
          "Verify full system functionality.",
          "Test the theory to determine cause.",
          "Establish a theory of probable causes.",
          "Establish a plan of action to resolve the issue."
        ],
        correct: ["Establish a theory of probable causes."]
      },
      {
        id: "m17-q21", type: "single",
        question: "An administrator can ping a web server via IP but cannot browse by domain name. Which troubleshooting tool is most useful?",
        answers: ["netstat", "tracert", "nslookup", "ipconfig"],
        correct: ["nslookup"]
      },
      {
        id: "m17-q22", type: "multi",
        question: "A Windows PC shows an IP of 169.254.10.3 after running ipconfig. Which two conclusions can be drawn? (Choose two.)",
        answers: [
          "The PC cannot contact a DHCP server.",
          "The DNS server address is misconfigured.",
          "The default gateway address is not configured.",
          "The PC is configured to obtain an IP address automatically.",
          "The enterprise network is misconfigured for dynamic routing."
        ],
        correct: ["The PC cannot contact a DHCP server.", "The PC is configured to obtain an IP address automatically."]
      },
      {
        id: "m17-q23", type: "single",
        question: "What is considered the most effective way to mitigate a worm attack?",
        answers: [
          "Change system passwords every 30 days.",
          "Ensure that all systems have the most current virus definitions.",
          "Ensure that AAA is configured in the network.",
          "Download security updates from the OS vendor and patch all vulnerable systems."
        ],
        correct: ["Download security updates from the OS vendor and patch all vulnerable systems."]
      },
      {
        id: "m17-q24", type: "single",
        question: "Which statement describes the difference between ping and tracert?",
        answers: [
          "Tracert shows each hop, while ping shows a destination reply only.",
          "Tracert uses IP addresses; ping does not.",
          "Both ping and tracert can show results in a graphical display.",
          "Ping shows whether the transmission is successful; tracert does not."
        ],
        correct: ["Tracert shows each hop, while ping shows a destination reply only."]
      },
      {
        id: "m17-q25", type: "single",
        question: "Which protocol would be best for securely accessing network devices to document their configurations?",
        answers: ["FTP", "HTTP", "SSH", "Telnet"],
        correct: ["SSH"]
      },
      {
        id: "m17-q26", type: "single",
        question: "Which network service automatically assigns IP addresses to devices on the network?",
        answers: ["DHCP", "Telnet", "DNS", "traceroute"],
        correct: ["DHCP"]
      },
      {
        id: "m17-q27", type: "single",
        question: "Which command can an administrator use to determine what interface a router will use to reach remote networks?",
        answers: ["show arp", "show interfaces", "show ip route", "show protocols"],
        correct: ["show ip route"]
      },
      {
        id: "m17-q28", type: "multi",
        question: "On which two interfaces or ports can security be improved by configuring executive timeouts? (Choose two.)",
        answers: ["Fast Ethernet interfaces", "Console ports", "Serial interfaces", "VTY ports", "Loopback interfaces"],
        correct: ["Console ports", "VTY ports"]
      },
      {
        id: "m17-q29", type: "single",
        question: "What is the best command to verify the IP addresses of all interfaces on a router?",
        answers: ["show ip interface brief", "nslookup", "ipconfig getifaddr en0", "show ip route"],
        correct: ["show ip interface brief"]
      },
      {
        id: "m17-q30", type: "single",
        question: "Students on the same switch have slower than normal response times. The admin suspects a duplex issue. Which command should be used?",
        answers: ["show interfaces", "ipconfig getifaddr en0", "copy running-config startup-config", "show ip nat translations"],
        correct: ["show interfaces"]
      }
    ]
  }
];
