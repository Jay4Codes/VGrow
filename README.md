#TRI-NIT:
This is our project made for the TRI-NIT 36 hour Hackathon 2023.

# We have four branches :
Website Code :https://github.com/Jay4Codes/TRINIT_ENEMIESOFSYNTAX_ML
<br />Frontend Code : https://github.com/Jay4Codes/TRINIT_ENEMIESOFSYNTAX_ML/tree/frontend
<br />Backend Code : https://github.com/Jay4Codes/TRINIT_ENEMIESOFSYNTAX_ML/tree/backend
<br />ML models Code : https://github.com/Jay4Codes/TRINIT_ENEMIESOFSYNTAX_ML/tree/model


# VGrow

# Introduction

Hola everyone, this is team Enemies of Syntax which consists of 3 people of each and every stack. We have Jay here for React.js Client-side Frontend, Arihant for the Flask backend and Parth for Model building and optimization.

# Contributors :
<br />Jay Jain: https://github.com/jay4codes
<br />Arihant Sheth : https://github.com/AryaStark13
<br />Parth Kapadia : https://github.com/pKap4


# Case Study: Crop Prediction

Farming is an important industry for any economy, especially the Indian economy, and hence it becomes a necessity to maximise the profits procured from it. A detailed analysis, though, suggests that it is highly imperative to take into consideration the nutrient contents of the soil and the climatic conditions of the area that the farming activity is to be undertaken at. Not choosing the correct crop to grow based on the above factors can lead to suboptimal yield or even severe depletion of essential nutrients in the soil.

Fertilisers are one of the most important resources that can be used in the process of growing crops, providing essential nutrients for the growing crops. Hence, it becomes highly imperative to pick the correct fertiliser based on the crop being grown, the soil it is being grown in and other environmental factors. Selecting the correct fertiliser can optimise crop yield, hence increasing profit margins, and clubbing these with the optimal selection of crop to grow also helps to maintain the profile of the soil, making the approach highly sustainable.


# What is so good about us?

Here at VGrow, we streamline the process of recommending the type of crop to grow based on varied factors, whilst maintaining an easy to navigate user interface for an optimal user experience.

VGrow offers two main features to ensure that maximum user requirements are met. 
Firstly, we offer a feature to predict the top 3 crops that can be viable options to be grown, depending on the location, time period and soil profile that has been entered by the user. 
The second feature is the ability to predict the fertiliser to be used, depending on the soil profile, location, time period and crop to be grown.


Now we are taking this time to introduce you guys with the web thing of our company which is basically a website.

# Description of VGrow

The user will only have to enter a few fields that include their location, soil profile and time period to receive a list of recommendations of which crops can be viably grown in that region, within the specified amount of time. There will also be an option to predict the optimal fertiliser to be used, given the above data, in addition to the crop being grown. The website offers a simple and easily navigable user interface that makes these predictive algorithms more accessible. In addition, the user will be able to switch between languages based on their preferences, so as to ensure that language is no barrier to access this information.

<img src="https://i.imgur.com/NMEZTQp.jpg" />
<img src="https://i.imgur.com/zophvZb.jpg" />

# Model Optimization
## Logistic Regression
* We started by training a baseline Logistic Regression model on the dataset. For this model, we got a train accuracy of **93%** and a testing accuracy of **92%**. This showed that the model was generalizing well in a linear scenario and a more complex model would overfit to the training data and give poor result on the test set.

## Simple Decision Tree
* Next, we trained a simple Decision Tree on the dataset and let it train completely to achieve a train accuracy of **100%**. This gave us a test accuracy of **95%**. Even though this is higher than the test accuracy of our baseline model, we can see that it lags significnatly behind the training accuracy of 100%. This shows that the model is overfitting and a Simple Decision Tree is not the best choice for this dataset.

## Random Forest
* Finally, we used a Random Forest model with the default hyperparameters and let it create 100 individual estimators Decision Trees. This led to a train accuracy of **100%** and a testing accuracy of **97%**. This was even better than the individual Decision Tree as it increased the testing accuracy. 
* At this point, we felt the model could still perform better on unseen data as having a training accuracy of 100% is generally not suitable.
* So, we tuned our Random Forest model hyperparameters to include **log<sub>2</sub> n + 1** trees which serves as a good starting point for estimating the number of individual trees while optimizing a Random Forest model. We modified the max_tree_depth to 7 nodes so that no single tree overfits on the training set resulting in a 100% training accuracy. 
* The new parameters resulted in a slightly lower training accuracy of **99.75%** but a much better testing accuracy of **99.3%**. 

* We had now tuned our model to achieve the best predictions for the given dataset. So we loaded it into a pkl file and used it in the Flask app for further predictions.
