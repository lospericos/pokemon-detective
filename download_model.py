from keras import applications


model = applications.mobilenet.MobileNetV2()
model.save('./mobilenet-model.h5')
