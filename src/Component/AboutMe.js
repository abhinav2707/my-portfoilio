import React , {useEffect , useState , useRef} from "react";
import "./styles.css";
const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: Disconnect observer if you want the animation to occur only once
        }
      },
      {
        root: null, // null means it uses the viewport
        rootMargin: "0px",
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [aboutMeRef]);
  return (

    
    <div className="aboutme" ref={aboutMeRef}>
      <div className={`outer ${isVisible ? "fadeIn" : ""}`} aboutme>
        <h1 className="aboutmeheading">About Me</h1>
        <p className="desc">
          Hey there, intrepid web wanderer! 👋 I'm Abhinav Singh, a digital
          architect by day and a code ninja by night. With a GPA that proves I'm
          not just a pretty interface (it's a solid 3.9/5, thank you very much),
          I've been on a quest to conquer the digital realm one pixel at a time.
        </p>
        <p className="desc">
          Imagine a blend of Gandalf's wisdom 🧙‍♂️ and Deadpool's wit, and you'll
          get a glimpse of what it's like to work with me. When I'm not busy
          crafting dynamic websites or debugging like Sherlock Holmes 🔍, you
          can find me debating whether React hooks are better than a cup of
          coffee (spoiler: they are ☕️).
        </p>
        <p className="desc">
          From crafting ERP portals for schools 🏫 to wrangling with React for
          the latest blockbuster movie app 🎬, my journey in the digital cosmos
          has been nothing short of an epic quest. I've battled bugs 🐛, tamed
          APIs 🤖, and even faced the dreaded dragon of cross-browser
          compatibility (it's a real thing, trust me 🐉).
        </p>
        <p className="desc">
          But hey, it's not all 0s and 1s with me. I've got a soft side too!
          With soft skills sharper than a katana 🗡️, I've mastered the art of
          leadership 🎓, event management 🎉, and even the elusive skill of
          making JavaScript puns that don't make you want to Ctrl+Alt+Delete.
        </p>
        <p className="desc">
          So, whether you're a fellow adventurer in the vast wilderness of code
          or just someone looking for a web wizard to sprinkle some digital
          magic, I'm here to turn your pixels into dreams ✨.
        </p>
        <p className="desc">
          Let's code together and make the internet a funnier, funkier, and more
          fabulous place! 💻
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
