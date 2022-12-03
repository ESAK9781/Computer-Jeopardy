var game = [
    {
        name: "Icons",
        questions: [
            {
                name: "100",
                text: "To what programming language does this icon belong?",
                image: "./res/c.png",
                answer: "C Language"
            },
            {
                name: "200",
                text: "To what programming language does this icon belong?",
                image: "./res/javascript.png",
                answer: "Javascript"
            },
            {
                name: "300",
                text: "To what programming language does this icon belong?",
                image: "./res/python.png",
                answer: "Python"
            },
            {
                name: "400",
                text: "To what programming language does this icon belong?",
                image: "./res/java.png",
                answer: "Java"
            },
            {
                name: "500",
                text: "To what programming language does this icon belong?",
                image: "./res/rust.png",
                answer: "Rust"
            }
        ]
    },
    {
        name: "Snippets",
        questions: [
            {
                name: "100",
                text: "What would the following scratch script do?",
                image: "./res/snip1.png",
                answer: "If the character is touching the mouse pointer, it will move 10 steps"
            },
            {
                name: "200",
                text: "What would the following Javascript program do?",
                image: "./res/snip2.png",
                answer: "It would print the words \"Hello World\" on the screen"
            },
            {
                name: "300",
                text: "What would the following Python script do?",
                image: "./res/snip3.png",
                answer: "It would count from one to five, and print the numbers on the screen"
            },
            {
                name: "400",
                text: "What would the following Javascript program do?",
                image: "./res/snip4.png",
                answer: "It would count by two's to two hundred, printing each number to the screen"
            },
            {
                name: "500",
                text: "What would the following C++ program do?",
                image: "./res/snip5.png",
                answer: "It would list ten alternating ones and zeros, printing each to the screen"
            }
        ]
    },
    {
        name: "Is it a Language?",
        questions: [
            {
                name: "100",
                text: "Is Python a programming language?",
                image: "./res/python_3.webp",
                answer: "Yes, Python is a programming language frequently used for statistics and data science"
            },
            {
                name: "200",
                text: "Is ChimpScript a programming language?",
                image: "./res/chimp_3.png",
                answer: "No, ChimpScript is not a programming language"
            },
            {
                name: "300",
                text: "Is Rust a programming language?",
                image: "./res/rust_3.jpg",
                answer: "Yes, Rust is a programming language often used for low-level programs that need to run fast"
            },
            {
                name: "400",
                text: "Is Ruby a programming language?",
                image: "./res/ruby_3.jpg",
                answer: "Yes, Ruby is a programming language often used to program web applications"
            },
            {
                name: "500",
                text: "Is Brain[F word] a programming language?",
                image: "./res/brain_3.jpg",
                answer: "Yes, but this programming language was designed to be very difficult and counterintuitive as a joke"
            }
        ]
    },
    {
        name: "Computer Trivia",
        questions: [
            {
                name: "100",
                text: "What is a GPU, and what is it used for?",
                image: "./res/gpu.jpg",
                answer: "A GPU is a graphics processing unit, and it can be used to quickly render complex scenes for video games or videos"
            },
            {
                name: "200",
                text: "Most websites end in .com, but what does that stand for and what does it mean?",
                image: "./res/com.png",
                answer: ".com stands for .commercial, and it indicates a website is for commercial purposes and may be making a profit"
            },
            {
                name: "300",
                text: "Python is an interpreted language while C is a compiled one. Explain this difference.",
                image: "./res/interpreted.png",
                answer: "The computer will read through a python program line by line and interpret it, while a C program is simply translated all at once. This makes C faster, but allows Python to be far simpler, as the computer does not need to understand every detail of the program before it starts."
            },
            {
                name: "400",
                text: "RAM is frequently used as a measure of computer power. What does it stand for?",
                image: "./res/ram.jpg",
                answer: "RAM stands for random access memory, and is the computer memory where programs can store variables"
            },
            {
                name: "500",
                text: "Often called the Father of Modern Computer Science, which famous mathematician is credited with breaking the Enigma code during WWII with a computer.",
                image: "./res/turing.jpg",
                answer: "Alan Turing is credited with breaking the Nazi Enigma code, which was critical in helping win the war. He also came up with the concept of a Turing Machine, based upon which all modern computers are judged."
            }
        ]
    },
    {
        name: "Security",
        questions: [
            {
                name: "100",
                text: "Why is the password \"password123\" insecure?",
                image: "./res/bad_pass.jpg",
                answer: "Simple passwords like these are very common, and will be a hacker's first guess when they try to break into your account."
            },
            {
                name: "200",
                text: "True or False: In order to verify that the password you entered is correct, websites need to store a copy of you password for themselves.",
                image: "./res/hash.jpg",
                answer: "False, a website can perform something called a cryptographic hash on your password, and store that instead. A simple example of this, would be to take the password \"1234,\" and add all of its digits together. Thus, any password whose digits add up to 10 will be marked correct, and the website can verify your login without storing sensitive passwords."
            },
            {
                name: "300",
                text: "One famous online scam, known as the \"Nigerian Prince,\" was an example of an andvance-fee scam. What is the basic premise of such a scam?",
                image: "./res/scam.jpg",
                answer: "A scammer asks for a small advance payment and promises in return a far larger reward. Typically, they claim the small fee will help them access more money, which they would, of course, share with their victim."
            },
            {
                name: "400",
                text: "Most of your online communications, or even the websites you visit, are kept secure by an encryption called HTTPS. What does this stand for?",
                image: "./res/https.png",
                answer: "It stands for Hyper Text Transfer Protocol Secure, and it is special because it makes you the only one who can decrypt messages sent to you. Even the person who sent it to you cannot decrypt it after they have encrypted it."
            },
            {
                name: "500",
                text: "A DDoS, or Distributed Denial of Service, attack is one of the most common types of large-scale cyber attacks. What is the goal of this attack, and how is it done?",
                image: "./res/ddos.webp",
                answer: "A DDoS attack is when someone has many different computers spam a server (someone else's computer), causing it to slow down or crash because of all the extra traffic"
            }
        ]
    }
];