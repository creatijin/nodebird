import PropTypes from "prop-types";

const PostImages = ({ images }) => {
  return (
    <>
      <div>포스트이미지스</div>
    </>
  );
};

PostImages.PropTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
