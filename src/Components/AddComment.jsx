import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { addComment } from "../../api";

export const AddComment = ({ article_id, addCommentToList }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleChange = (e) => {
    setCommentInput(e.target.value);
    setUploadMessage("");
  };

  const uploadComment = (e) => {
    e.preventDefault();

    if (commentInput === "") {
      setUploadMessage("Please type a valid comment before posting");
      return;
    }

    setUploadMessage("Your comment is uploading...");

    const newComment = {
      username: "tickle122",
      body: commentInput,
    };

    console.log("Posting comment:", newComment);

    addComment(article_id, newComment)
      .then((response) => {
        const comment = response.comment;

        if (!comment || !comment.comment_id || !comment.body) {
          setUploadMessage("Failed to post comment: Invalid response from server");
          return;
        }


        setSuccessMessage("Comment successfully posted!");
        setUploadMessage("");


        addCommentToList(comment);
      })
      .catch((err) => {
        setUploadMessage("Your comment failed to upload. Please try again!");
        console.error("Error posting comment:", err);
      });
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          value={commentInput}
          id="comment-input"
          placeholder="Leave a comment"
          aria-label="Leave a comment"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={uploadComment}
          disabled={isSubmitting}
        >
          Post
        </Button>
      </InputGroup>
      {successMessage && <p>{successMessage}</p>} {/* Display success message */}
      {uploadMessage && <p>{uploadMessage}</p>} {/* Conditionally render upload message */}
    </>
  );
};
