import React from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Hover from "./Stars/Hover";
import Selected from "./Stars/Selected";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`;

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`;

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;

const ReviewWrapper = styled.div`
  background: white;
  padding: 20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom: 80px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`;

const SubmitBtn = styled.button`
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  padding: 12px 12px;
  border: 1px solid #000;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  margin-top: 20px;

  &:hover {
    background: #71b406;
    color: #fff;
    border: 1px solid #000;
  }
`;

const ReviewHeadline = styled.div`
  font-size: 20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`;

const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

function ReviewForm({
  handleChange,
  handleSubmit,
  attributes,
  review,
  setRating,
}) {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          value={score}
          name="rating"
          checked={review.score == score}
          onChange={() => console.log("selected:", score)}
          id={`rating-${score}`}
        />
        <label onClick={setRating.bind(this, score)}></label>
      </>
    );
  });

  return (
    <ReviewWrapper>
      <form onSubmit={handleSubmit}>
        <ReviewHeadline>
          Have an experience with {attributes.attributes.name} Share your
          review!
        </ReviewHeadline>
        <Field>
          <input
            onChange={handleChange}
            value={review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            onChange={handleChange}
            value={review.description}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingBoxTitle>Rate This Airline</RatingBoxTitle>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </ReviewWrapper>
  );
}

export default ReviewForm;
