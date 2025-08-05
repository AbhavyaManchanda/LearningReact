import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
        setLoading(true);

        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if (data) {
            setImages(data);
            setLoading(false);
        }
        } catch (e) {
        setErrorMsg(e.message);
        setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);
    // useEffect hook is used to fetch images when the component mounts or when the url changes.
    // it takes two arguments, the first is a function that will be executed when the component mounts or when the url changes, and the second is an array of dependencies that will trigger the function when they change.
    // in this case, the function fetchImages will be executed when the component mounts or when the url changes.
    // the url is passed as a prop to the component, so when it changes, the useEffect hook will be triggered and the fetchImages function will be called with the new url.
    //we got this url from the App.jsx file where we passed the url as a prop to the ImageSlider component.
    //we are writng fetchImages(url) to call the function with the url passed as a prop.it is an async function that fetches the images from the url.upr hi likha hai .
    //we also pass the page and limit as query parameters to the url to fetch the images accordingly.
    //page is the page number and limit is the number of images to be fetched per page.
    //page is where we want to start fetching the images from and limit is how many images we want to fetch per page.
    //we are using the useState hook to store the images in the state and the current slide in the state.
    
    console.log(images);

    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
    }

    return (
        <div className="container">
            
        <BsArrowLeftCircleFill onClick={handlePrevious}
            className="arrow arrow-left" />
            
        {images && images.length ? images.map((imageItem, index) => (
                <img key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                    currentSlide === index //currentSlide is the index of the image that is being displayed.we got it through useState hook.
                        //index is the index of the image in the images array.we got it through map function.
                        // if currentSlide is equal to index then it means that this is the current image that is being displayed.
                    ? "current-image"
                    : "current-image hide-current-image"
                }
                />
            ))
                : null}
            {/* this is the current image that is being displayed .
            ternary op is for the current image to be displayed or not .
            if it is the current image then it will be displayed otherwise it will be hidden . through css . classname hi aisa diya hai */}
            
        <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right"
            />
            
        <span className="circle-indicators">
            {images && images.length
            ? images.map((_, index) => (
                <button
                    key={index}
                    className={
                    currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                ></button>
                ))
            : null}
            </span>
            
        </div>
    );
    }
