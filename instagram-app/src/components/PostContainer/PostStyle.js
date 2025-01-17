import styled from 'styled-components'

const postWrapper = styled.div`
  width             : 100%;
  display           : flex;
  flex-direction    : column;
  margin-bottom     : 2rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow   : 0px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow        : 0px 0px 5px 0px rgba(204, 204, 204, 1);
.header {
  display    : flex;
  height     : 70px;
  align-items: center;
  padding    : 0 2rem;
}

.header img {
  width        : 50px;
  height       : 50px;
  border-radius: 50%;
  object-fit   : cover;
}

.header h3 {
  padding  : 0.8rem;
  font-size: 1.6rem;
}

.post-image img {
  object-fit: cover;
  height    : 100%;
  widows    : 100%;
}
.post-likes {
  display       : flex;
  flex-direction: column;
  padding-left  : 1rem;
}
.post-likes ul {
  padding: 0;
  display: flex;
  width  : 60px;
}
.post-likes ul li {
  list-style: none;
  margin    : auto 0.8rem;
  cursor: pointer;
}
.post-likes ul li:hover {
  transform: scale(1.2);
  transition: 0.2s ease-in-out;
}

.post-likes ul li i {
  font-size  : 1.8rem;
  color      : black;
  font-weight: 100;
}
.post-likes ul li i:first-of-type:hover {
  font-weight: bold;
  color: rgb(165, 58, 76);
}
 .post-likes p {
  padding-left: 0.8rem;
  font-size   : 1.6rem;
  margin      : 0;
}
.timestamp {
  font-size   : 1.6rem;
  color       : #ccc;
  padding-left: 0.8rem;
  padding-left: 1rem;
}
`

export default postWrapper;