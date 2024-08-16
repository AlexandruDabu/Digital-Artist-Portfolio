import React, { useState } from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { uploadImageToCloudinary } from "../services/cloudinaryServices";
import { useDropzone } from 'react-dropzone';
import { Typography, Box, CircularProgress, Paper } from '@mui/material';

interface ImageUploaderProps {
    imageUrl: string | null;
    onImageUpload: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ imageUrl, onImageUpload }) => {
    const cloud_name = "dzcbnpola";
    const [file, setFile] = useState<File | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(imageUrl);
    const [uploading, setUploading] = useState<boolean>(false);
    const onDrop = async (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            setUploading(true);

            try {
                const imageUrl = await uploadImageToCloudinary(selectedFile);
                setUploadedImageUrl(imageUrl);
                onImageUpload(imageUrl);
            } catch (error) {
                console.error('Error uploading file:', error);
                console.log(file);
            } finally {
                setUploading(false);
            }
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const cld = new Cloudinary({ cloud: { cloudName: cloud_name } });

    const extractPublicId = (url: string) => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 1].split('.')[0];
    };

    const cldImage = uploadedImageUrl
        ? cld.image(extractPublicId(uploadedImageUrl))
            .format('auto')
            .quality('auto')
            .resize(auto().gravity(autoGravity()).width(360).height(140)) // Match CardMedia's aspect ratio
        : null;

    return (
        <Box sx={{ padding: 2, textAlign:'center', display: 'flex', alignItems:'center', flexDirection:'column'}}>
            <Typography variant="h6" gutterBottom>
                Upload an Image
            </Typography>
            <Paper
                {...getRootProps({ className: 'dropzone' })}
                sx={{
                    border: '2px dashed #007bff',
                    borderRadius: 2,
                    padding: 2,
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    marginBottom: 2,
                    minHeight: uploadedImageUrl ? '140px' : '300px', 
                    width: uploadedImageUrl ? '360px' : '100%', 
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                        backgroundColor: '#01101d'
                    },
                    transition: 'width 0.3s ease, height 0.3s ease',
                }}
            >
                <input {...getInputProps()} />
                <Typography variant="body1" color="textSecondary">
                    Drag & drop an image here, or click to select one
                </Typography>
                {uploading && (
                    <CircularProgress 
                        size={24} 
                        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} 
                    />
                )}
                {uploadedImageUrl && cldImage && (
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                        }}
                    >
                        <AdvancedImage 
                            cldImg={cldImage} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover'
                            }} 
                        />
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default ImageUploader;
