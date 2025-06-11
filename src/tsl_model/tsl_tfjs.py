# Gerekli kütüphaneler
import tensorflow as tf
import tensorflowjs as tfjs

# Modeli yükle
model = tf.keras.models.load_model('TSL_model.keras')  # veya 'modelim.keras'

# TF.js formatına dönüştür (output klasörü oluşturulacak)
tfjs.converters.save_keras_model(model, 'tfjs_model_TSL')