# Celebrity Image Classifier

This is a machine learning-powered web application that classifies celebrity images through a frontend UI and a Flask-based backend. It has been successfully deployed to production using **Ubuntu and AWS EC2**.

## 🧠 Project Overview

- Detects and classifies celebrities from uploaded images.
- Uses OpenCV for face detection and wavelet transforms for feature extraction.
- Web interface built using HTML, CSS, and JavaScript.
- Backend powered by Flask and a custom trained classification model.
- Deployed to production using **Ubuntu and AWS EC2**.



## 🚀 Production Deployment

This project is deployed on a **Ubuntu server using AWS EC2**, with:

- Gunicorn + NGINX for serving the Flask app
- SCP/SSH for secure file transfer
- Systemd for automatic service restart

## 🛠️ Tech Stack

- Python, Flask
- OpenCV, NumPy, Scikit-learn
- HTML, CSS, JavaScript
- Ubuntu, AWS EC2, Gunicorn, NGINX

## 🧪 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/taranroyyuru/Celebrity_Image_Classifier.git
   cd Celebrity_Image_Classifier
