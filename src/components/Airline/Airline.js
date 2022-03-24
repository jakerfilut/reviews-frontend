import React, { useState, useEffect } from "react";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Review from "./Review";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

function Airline() {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    const url = `http://localhost:3000/api/v1/airlines/${params.slug}`;
    axios
      .get(url)
      .then((res) => {
        setAirline(res);
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  function handleChange(e) {
    e.preventDefault();

    setReview({ ...review, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // const csrfToken = document.querySelector("[name=csrf-token]").content;
    // axios.defaults.headers.common["X-CRSF-TOKEN"] = csrfToken;

    const airline_id = airline.data.data.id;
    axios
      .post(`http://localhost:3000/api/v1/reviews`, { review, airline_id })
      .then((resp) => {
        const included = [...airline.data.included, resp.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((resp) => {});
  }

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };
  let reviews;
  if (loaded && airline.data.included) {
    reviews = airline.data.included.map((item, index) => {
      return <Review key={index} singleReview={item.attributes} />;
    });
  }

  return (
    <Wrapper>
      {loaded && (
        <>
          <Column>
            <Main>
              <Header data={airline.data.data} />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.data}
              review={review}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
}

export default Airline;
