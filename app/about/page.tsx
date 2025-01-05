'use client'
import ArrowLeft from "@/components/ui/arrow_left";
import Image from "next/image"
import React from "react";
import Link from "next/link";

const About = () => {
    return (
        <div className="bg-white ">
            <div className="mx-auto container p-8 pt-20 h-screen ">
                <Link href="/"><ArrowLeft /></Link>
                <h1 className="pb-2 text-2xl font-metropolis pt-10">About Us</h1>
                <p className="text-xl">
                    Hello and welcome to our journey in building an innovative solution
                    for pub enthusiasts in the bustling city of Bengaluru, India. We are
                    Chetan Kumar Aradhya and Anuj Ranjan Kumar, graduates from a Tier 3
                    college, and we are excited to share the story behind our venture.
                </p>

                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis pb-2">Our Humble Beginnings</h1>
                    <p className="text-xl">
                        Our journey started with a shared passion for technology and a
                        desire to make a meaningful impact. The idea for our website emerged
                        from a real-life problem we encountered in Bengaluru - the lack of a
                        reliable platform to search for pubs in the city. Bengaluru, often
                        dubbed as the Pub Capital of India, boasts a vibrant and diverse
                        pub culture, with an abundance of amazing venues. However, finding
                        the right information about these pubs was a challenge we and many
                        others faced.
                    </p>
                </div>
                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis  pb-2">The Quest for Data</h1>
                    <p className="text-xl">
                        Driven by the ambition to create a platform that would simplify the
                        lives of pub-goers, we embarked on a mission to gather and compile
                        accurate data about Bengaluru&apos;s pubs. This, however, proved to be a
                        more challenging task than we initially thought. The lack of
                        centralized, up-to-date data on these establishments made our
                        journey a bit of a wild ride. Nevertheless, our determination to
                        fill this information gap pushed us to develop a beta version of our
                        website.
                    </p>
                </div>
                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis pb-2">
                        Introducing the Beta Version
                    </h1>
                    <p className="text-xl">
                        In our relentless pursuit of making pub-hopping in Bengaluru more
                        convenient, we launched the beta version of our website. This
                        initial release was a testament to our commitment and resilience.
                        While it may not have been perfect, it was a significant step
                        towards providing a practical solution for those seeking pub-related
                        information in the city.
                    </p>
                </div>
                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis  pb-2">Our Ongoing Journey</h1>
                    <p className="text-xl">
                        Our journey is far from over. We understand that Rome wasn&apos;t built
                        in a day, and the same goes for a platform that serves the needs of
                        a city as dynamic as Bengaluru. We are constantly working on
                        improving our website, adding more features, and, most importantly,
                        gathering more data to ensure it&apos;s as comprehensive as possible. We
                        are determined to provide a one-stop resource for all pub-related
                        queries in Bengaluru, from locations and ratings to the types of
                        cuisines served.
                    </p>
                </div>
                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis pb-2">Data Source</h1>
                    <p className="text-xl">
                        We want to emphasize that all the data provided on our platform is
                        sourced from Google, one of the most trusted sources of information
                        on businesses and establishments. This ensures that you have access
                        to reliable and up-to-date information about Bengaluru&apos;s pubs.
                    </p>
                </div>
                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis pb-2">Your Support Matters</h1>
                    <p className="text-xl">
                        We believe in the power of community. As we continue to enhance our
                        website, we welcome your feedback, suggestions, and even
                        collaborations. Your insights can help us shape our platform into a
                        valuable resource for pub enthusiasts in Bengaluru and beyond.
                    </p>
                </div>
                <div className="pt-6">
                    <h1 className="text-2xl font-metropolis pb-2">Join Our Journey</h1>
                    <p className="text-xl">
                        We invite you to join us on this exciting journey. Whether you are a
                        pub-goer, a pub owner, or someone passionate about technology and
                        data, your participation can make a difference. Together, we can
                        contribute to the growth of a dynamic pub culture in Bengaluru and
                        provide a reliable source of information for the community.
                    </p>
                </div>
                <div className="pt-6 pb-4">
                    <h1 className="text-2xl font-metropolis  pb-2">
                        Thank You for Your Support
                    </h1>
                    <p className="text-xl">
                        We extend our heartfelt thanks to everyone who has supported us
                        along the way, from friends and family to those who have used our
                        website. Your encouragement and feedback inspire us to keep working
                        towards our vision. We are excited about what the future holds, and
                        we can&apos;t wait to share our progress with you. Thank you for being a
                        part of our journey.
                    </p>
                </div>
                <span className="text-xl lg:text-2xl  font-metropolis pb-2">Sincerely,</span>
                <br></br>
                <div className="flex flex-col  md:flex-row md:justify-between">
                    <span className="text-xs lg:text-xl  font-metropolis">
                        BADD(BengaluruAradhyaDrinkDirectory)
                    </span>
                    <Image
                        src="/aboutPic.jpg"
                        alt="aboutPic"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
