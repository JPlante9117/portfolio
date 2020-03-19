import React, { Component } from 'react'
import Blog from '../components/Blog'
import ScrollAnimation from 'react-animate-on-scroll'

const blogs = [
    {title: "The Beauty of React Organization", link: "https://jplante9117.github.io/the_beauty_of_react_organization", first_few: "When you code, organization is key. Sometimes, organization comes down to creating comments that separate...", date: "Mar 13, 2020"},
    {title: "The Impacts of Revisiting Projects", link: "https://jplante9117.github.io/the_impacts_of_revisiting_projects", first_few: "Last week, I submitted my JavaScript Project which was a simple organizer for my (extensive) game collection. It...", date: "Feb 21, 2020"},
    {title: "Changing the Learning Style: JavaScript", link: "https://jplante9117.github.io/changing_the_learning_style_javascript", first_few: "The past few months, I have been working with Ruby and Ruby-based programs. While this past project was also...", date: "Feb 04, 2020"},
    {title: "When You Don't Know What's Going On...", link: "https://jplante9117.github.io/when_you_dont_know_whats_going_on", first_few: "Today is 'Day 1' of JavaScript for my cohort, but I have finished the weeks curriculum with the exception of one...", date: "Jan 18, 2020"}
]

export default class BlogContainer extends Component {
    generateBlogs = () => {
        return blogs.map(blog => <Blog title={blog.title} desc={blog.first_few} posted={blog.date} link={blog.link}/>)
    }
    
    render() {
        return (
            <div className="blogSection">
                <ScrollAnimation animateOnce={true} animateIn="slideInRight">
                    <div className="blog-container">
                        <a id="blog" className="anchor" />
                        <h1 className="alignLeft">Blog</h1>
                        <div className="leftLine" />
                        <p className="blogSection-header">Keep up with what I'm doing by reading through some of my blog posts! I regularly post about the projects I'm working on
                        as well as the challenges I encounter along the way.</p>
                        {this.generateBlogs()}
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}