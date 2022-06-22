import ImageUploading from 'react-images-uploading';
import Button from '@mui/material/Button';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
function Upload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          countLikes,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button variant="contained" color="success"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              上傳圖片
            </Button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item" margin="100px auto">
                <img src={image['data_url']} alt="" width="400"/>
                <div className="image-item__btn-wrapper">
                <Fab onClick={() => countLikes(index)} disabled aria-label="like">
                    <FavoriteIcon />
                        </Fab>
                        <Fab onClick={() => onImageUpdate(index)} color="success" aria-label="edit">
                      <EditIcon />
                      </Fab>
                      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onImageRemove(index)} className="todolist_rmbtn">Delete</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Upload;