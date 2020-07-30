from tensorflow.keras import applications


model = applications.densenet.DenseNet121()
model.save('./mobilenet-model.h5')
