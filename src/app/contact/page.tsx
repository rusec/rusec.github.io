"use client";
import Link from "next/link";
import React from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
export const dynamic = "auto";
type Props = {};

function page({}: Props) {
    return (
        <div className="bg-base-100 text-primary-content p-4 min-h-screen">
            <div className="p-7 bg-base-200 text-secondary-content rounded-md shadow-md">
                <pre className="hidden">YmV3YXJlIG9mIHRoZSBjeWJlcmNoZWYuIGh0dHBzOi8vY3liZXJjaGVmLmlvLyA=</pre>
                <h1 className="font-extrabold text-5xl pb-2">Contact Us</h1>
                <div className="p-2">
                    <p className="pb-2">
                        If you have any questions or would like to learn more about the Rutgers Cybersecurity Club (RUSEC), we’d love to hear from
                        you! Whether you’re interested in joining, collaborating, or just want to chat about all things cybersecurity, feel free to
                        reach out to us. You can contact our president via email at [rs2069@scarletmail.rutgers.edu].
                    </p>
                    <p className="pb-2">
                        Additionally, we encourage you to join our Discord community to stay updated on our events, discussions, and more. You can
                        also find us on
                        <Link href="http://getinvolved.rusec.club" className="text-accent">
                            {" "}
                            GetInvolved{" "}
                        </Link>
                        at Rutgers to see our upcoming activities and become a member. We look forward to connecting with you!
                    </p>
                    <div className="flex gap-4 items-center justify-center p-4 relative">
                        <iframe
                            src="https://discord.com/widget?id=473678477132824576&theme=dark"
                            width="350"
                            height="500"
                            allowTransparency
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        ></iframe>
                        <InstagramEmbed
                            url={"https://www.instagram.com/rutgerscyber/"}
                            placeholderSpinner={
                                <div className="flex justify-center">
                                    <span className="loading loading-dots loading-lg text-primary"></span>
                                </div>
                            }
                            width={350}
                            height={500}
                        />
                        <YouTubeEmbed
                            url="http://youtube.rusec.club"
                            placeholderSpinner={
                                <div className="flex justify-center">
                                    <span className="loading loading-dots loading-lg text-primary"></span>
                                </div>
                            }
                            width={350}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
