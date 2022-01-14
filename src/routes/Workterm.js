import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai"
import ReactMarkdown from "react-markdown";

const Workterm = (props) => {
    const intro = 'Geomatics is a unique field of science in terms of the tools that scientists use to work with the data. It is defined by National Resources Canada as, [“The modern discipline which integrates the tasks of gathering, storing, processing, modelling, analyzing, and delivering spatially referenced or location information”](https://www.nrcan.gc.ca/science-and-data/science-and-research/geomatics/10776). The uniqueness of this subject is its tight coupling with computer science and data science tools. Languages like R and Python are used to process millions of data points for one analysis. The Government of Canada has teams of GIS technicians and scientists dedicated to producing GIS products and to creating statistical inferences about the future of ecology, agriculture, and the health of the environment.'

    const par2 = 'In the fall of 2021, I had the opportunity to work with scientists at the Canadian Department of Agriculture and Agri-Food Canada, specifically the National Agroclimate Information Service (NAIS) team. This team produces many GIS products for use by the public and other branches of the government. Some of these products include the [Canadian Drought Monitor](https://agriculture.canada.ca/en/agriculture-and-environment/drought-watch-and-agroclimate/canadian-drought-monitor), [The Annual Crop Inventory](https://agriculture.canada.ca/atlas/aci/), and [Canadian Crop Metrics](https://agriculture.canada.ca/atlas/apps/cropmetrics/index-en.html). I worked with a biophysical modeller Yinsuo Zhang who would handle the more in-depth scientific aspects of the model while I worked on the code. My main task was working on the versatile soil moisture budget (VSMB). This was a large Python program designed to model soil moisture across Canada based on weather events, soil properties, and other factors.';
    const par3 = 'At the beginning of my work term I created some goals. These goals all revolve around the daily tasks throughout my workday. I was in a unique position at AAFC, being one of few computer science co-op students the department had hired. This allowed me to suggest and make improvements to code based on the knowledge I had gained through my major, as opposed to a geomatics major. I was also doing a lot of presentations for my supervisors and other groups of scientists.';
    const goal1 = 'I would like to learn how to work on already developed programs to make them perform more efficiently, be more user-friendly, and be more developer-friendly. More efficiently by reducing the time that it takes to run the program. More user-friendly by allowing for easier configuration options or easier interaction with a graphical interface. More developer-friendly by making code easier to read and debug.';
    const refl1 = 'Throughout my work term, I continued to make changes to programs with this goal in mind. Lots of effort was put into making the VSMB tool more user friendly. One of these changes was that I developed a new system for running the VSMB program. This system involved configuration files containing all of the many run-time options, which simplified running the program greatly. To increase program efficiency, I used a profiler to track the speed and made adjustments where possible. To aid usability I worked on updating and consolidating documentation for inputs and outputs of the VSMB. This documentation also included guides on how to use the new configuration file system as well as a GUI system. Making the code more developer-friendly was an ongoing attempt. Many small changes were made including comments, reduced nesting, and decreased method size. These changes were small on their own but contributed to much cleaner code when put together.';
    const goal2 = 'I would like to gain experience in using Github in a large-scale professional setting. I have lots of experience with Github for small projects; however, the process of moving multiple large projects to Github and maintaining repositories for many developers to push and pull from would be very useful for software positions in the future that rely heavily on git.';
    const refl2 = 'Unfortunately, I was not able to complete the goal of moving CCYF projects onto a Git platform. It was not a high priority for my superiors and I was focused on my work with the VSMB. I was able, however, to create documents that outlined how to use Git so that future work could be done to move these projects to a repository. Also, I was made aware that the department did have an internal Gitlab for these projects. I brought up the advantages of this technology at multiple meetings and strongly recommended it to my supervisors in my suggestions that I left at the end of my work term.';
    const goal3 = 'I would like to learn how to effectively present my work and receive feedback on it both verbally and through other media such as PowerPoint presentations. There are multiple opportunities each week for me to present my work and my questions about that work. By increasing my ability to focus on important milestones and by using effective language to get the correct answers to questions I may have, I can be much more effective in my tasks. This skill would be useful in other software jobs, where multiple people are working on a large project and communication between all parties is very necessary.';
    const refl3 = 'These opportunities to present my work and my findings were very helpful for improving my presentation skills. I incorporated diagrams and screenshots of program output and other findings into my presentations to increase engagement and understanding. This improved the quality and number of questions asked following the presentation. Some of my final presentations were presented to twelve or more members of ECCC (Environment and Climate Change Canada) and the AAFC. Presenting statistical model improvements in front of so many highly qualified scientists was a challenging task, and so it has increased my confidence when tasked with presenting any material.';
    const par4 = 'Going into this work term I wanted to learn data science tools. On the job, I was trained in Python and R. I had previous experience with Python but had never used it on such a large scale as I did when working on the VSMB. This was my first time working with the data science language R. I was trained on how to use it and some of the popular libraries for data processing. I plan on continuing with the field of geomatics, which ultimately means dealing with large datasets for analysis. By learning R and its popular libraries ([specifically the tidyverse](https://www.tidyverse.org/)) along with Python and the pandas library I am well equipped to deal with data cleaning, transformation, and reduction.';
    const jobDesc = 'The ECCC and the AAFC work together on soil moisture predictions to create datasets on national crop yield predictions and drought watch. A very large portion of my time at AAFC was working on the versatile soil moisture budget (VSMB). This Python program would take inputs of daily precipitation, maximum temperature, minimum temperature, solar radiation, wind speed, and relative humidity. From these inputs, the model would account for water loss due to runoff, drainage, potential evapotranspiration, crop usage, and some other processes. Different equations could be used for different processes as well. I worked on setting up the program to run properly using a more complex equation for potential evapotranspiration ([Penman-Monteith](https://en.wikipedia.org/wiki/Penman%E2%80%93Monteith_equation)). Lots of work on these modelling programs doesn’t just come from modifying the program itself. Rather, work has to be done to configure the testing of the model to see if it is working correctly. For all of the time I spent working on modifying the VSMB, I spent the same amount of time creating R scripts that would transform in-situ data from soil stations into usable input for the VSMB and to compare measured moisture values to modelled moisture values. This required me to learn data science skills which was a completely new field to me. I sanitized the data by replacing out-of-range and missing values with a weekly moving average. There were multiple sensors at each station that recorded information every 15 minutes. The average was taken from each sensor for every 15-minute interval, and then a daily average was taken from that.';
    const concl = 'Geomatics is a great example of the power that computer and data science brings to other fields of study. The AAFC uses GIS tools to keep the Canadian public informed and to make informed decisions using the information generated by these tools. The chance to improve modelling software which is used for crop yield predictions for the entire country was a very fulfilling role and my first step into the world of geomatics.';


    return (
        <>
            <div className="introCard">
                <h1>Agriculture and Agri-Food Canada</h1>
                <a href="https://twitter.com/aafc_canada" style={{ fontSize: "50px" }}><AiFillTwitterCircle /></a>
                <h2>Geomatics Technician</h2>
                <h3>CO-OP Position</h3>
                <h3>September 7, 2021 - December 23, 2021</h3>
            </div>
            <div className="content">
                <ReactMarkdown>
                    {intro}
                </ReactMarkdown>
                <br />
                <ReactMarkdown>
                    {par2}
                </ReactMarkdown>
                <br/>
                <h2>Goals</h2>
                <p>{par3}</p>
                <br/>
                <h4>Goal 1</h4>
                <p>{goal1}</p>
                <h4>Reflection</h4>
                <p>{refl1}</p>
                <br/>
                <h4>Goal 2</h4>
                <p>{goal2}</p>
                <h4>Reflection</h4>
                <p>{refl2}</p>
                <br/>
                <h4>Goal 3</h4>
                <p>{goal3}</p>
                <h4>Reflection</h4>
                <p>{refl3}</p>
                <br/>
                <ReactMarkdown>
                    {par4}
                </ReactMarkdown>
                <br/>
                <ReactMarkdown>
                    {jobDesc}
                </ReactMarkdown>
                <br/>
                <p>{concl}</p>
                <br/>

            </div>
        </>
    )
}
export default Workterm;