import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import OwlCarousel from 'react-owl-carousel';

import { selectTestimonials } from '../../redux/home/home.selector';

import './testimonials.styles.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = ({ testimonials }) => (
    <div className="testimonialsWrap">
        <div className="container">
            {
                (testimonials)?
                (<OwlCarousel
                    className="owl-theme testimonialSlider"
                    loop
                    margin={10}
                    items={2}
                    dots={false}
                    autoplay={true}
                >
                    {
                        testimonials.map(testimonial => <div key={testimonial.title} class={`item d-flex justify-content-between flex-wrap align-items-center ${testimonial.class}`}>
                            <div className="imgWrap" style={{ backgroundImage : `url(${testimonial.imageUrl})` }}></div>
                            <div className="contentWrap">
                                <h3>{testimonial.title}</h3>
                                <p>{testimonial.quote}</p>
                                <div className="author">{testimonial.author} - <span>{testimonial.company}</span></div>
                            </div>
                        </div> )
                    }
                </OwlCarousel>)
                : ''
            }            
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    testimonials : selectTestimonials
});

export default connect(mapStateToProps)(Testimonials);