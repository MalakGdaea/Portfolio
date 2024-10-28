import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from "../../components/Icon";
import { experiences } from "../../constants/work";
import Tech from "../../components/Tech";
import Title from "../../components/Title";


const Work: React.FC = () => {
    return <div className='container'>
        <Title title="Work Experience & Education." subTitle="WHAT HAVE I DONE SO FAR" />
        <VerticalTimeline>
            {experiences.map((experience, index) => <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: experience.BgColor, color: '#fff' }}
                contentArrowStyle={{ borderRight: `7px solid ${experience.BgColor}` }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, color: '#fff' }}
                icon={<Icon path={experience.icon} alt="company name" />}
            >
                <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
                <ul>
                    {experience.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
            </VerticalTimelineElement>)}
        </VerticalTimeline>
        <Tech />
    </div>
}

export default React.memo(Work);
