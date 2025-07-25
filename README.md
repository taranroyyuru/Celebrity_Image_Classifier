## Celebrity Image Classifier
This is a machine learning-powered web application that classifies celebrity images through a frontend UI and a Flask-based backend. It has been successfully deployed to production using Ubuntu and AWS EC2.

## 🧠 Project Overview
- Detects and classifies celebrities from uploaded images.
- Uses OpenCV for face detection and wavelet transforms for feature extraction.
- Web interface built using HTML, CSS, and JavaScript.
- Backend powered by Flask and a custom-trained classification model.
- Production deployment (AWS EC2, Ubuntu, NGINX).

## 🤖 Machine Learning Techniques
- Face Detection: Utilizes OpenCV’s Haar Cascade classifier to detect faces from images. Only images with two detected eyes are passed on for classification to improve accuracy and filter out partial faces.
- Feature Extraction: Combines two types of features:
- Raw Pixel Data: The cropped facial image is resized and flattened into a vector.
- Wavelet Features: A wavelet transform is applied to the image to extract high-frequency details (edges, textures). This output is also flattened into a feature vector.
- These two vectors are vertically stacked and used as the final input to the model.
- Model Training: A supervised learning classifier (e.g., Support Vector Machine or Random Forest) is trained on a labeled dataset of celebrity images. The combined raw+wavelet features serve as the input for training. The model is serialized using joblib and served through the Flask backend.

## 🛠️ Tech Stack
- Python, Flask
- OpenCV, NumPy, Scikit-learn
- HTML, CSS, JavaScript
- Ubuntu, AWS EC2, Gunicorn, NGINX

## Clone the Repo 
git clone https://github.com/taranroyyuru/Celebrity_Image_Classifier.git
cd Celebrity_Image_Classifier
