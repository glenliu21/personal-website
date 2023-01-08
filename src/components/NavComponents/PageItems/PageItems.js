import React from 'react';
import PageItem from './PageItem';
import homeIcon from "../../../assets/icons/navIcons/homeIcon.svg";
import hoveredHomeIcon from "../../../assets/icons/navIcons/hoveredHomeIcon.svg";
import blogIcon from "../../../assets/icons/navIcons/blogIcon.svg";
import hoveredBlogIcon from "../../../assets/icons/navIcons/hoveredBlogIcon.svg";
import workIcon from "../../../assets/icons/navIcons/workIcon.svg";
import hoveredWorkIcon from "../../../assets/icons/navIcons/hoveredWorkIcon.svg";
import philIcon from "../../../assets/icons/navIcons/philIcon.svg";
import hoveredPhilIcon from "../../../assets/icons/navIcons/hoveredPhilIcon.svg";

function PageItems() {
    return (
        <div>
            <PageItem
                href="/"
                hovered_svg={hoveredHomeIcon}
                hovered_alt="hovered-home-icon.svg"
                svg={homeIcon}
                alt="home-icon.svg"
                h1="Home"
            />
            <PageItem
                href="/blog"
                hovered_svg={hoveredBlogIcon}
                hovered_alt="hovered-blog-icon.svg"
                svg={blogIcon}
                alt="blog-icon.svg"
                h1="Blog"
            />
            <PageItem
                href="/projects"
                hovered_svg={hoveredWorkIcon}
                hovered_alt="hovered-work-icon.svg"
                svg={workIcon}
                alt="work-icon.svg"
                h1="Projects"
            />
            <PageItem
                href="/philosophy"
                hovered_svg={hoveredPhilIcon}
                hovered_alt="hovered-phil-icon.svg"
                svg={philIcon}
                alt="phil-icon.svg"
                h1="Philosophy"
            />
        </div>
    );
}

export default PageItems;