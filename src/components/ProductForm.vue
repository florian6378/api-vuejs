<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Nom du produit :</label>
      <input type="text" id="name" v-model="product.name" required>
    </div>
    <div>
      <label for="price">Prix :</label>
      <input type="number" id="price" v-model="product.price" required>
    </div>
    <button type="submit">{{ isEditing ? 'Mettre à jour' : 'Créer' }}</button>
    <button v-if="isEditing" @click.prevent="handleDelete">Supprimer</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const product = ref({
  name: '',
  price: 0
});
const isEditing = ref(false);

onMounted(() => {
  // Check if editing an existing product
  if (router.currentRoute.value.params.id) {
    const productId = router.currentRoute.value.params.id;
    // Fetch product details by ID and populate product ref
    axios.get(`/products/${productId}`)
      .then(response => {
        product.value = response.data;
        isEditing.value = true;
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
      });
  }
});

const handleSubmit = () => {
  if (isEditing.value) {
    // Update existing product
    axios.put(`/products/${product.value.id}`, product.value)
      .then(() => {
        router.push('/products');
      })
      .catch(error => {
        console.error("Error updating product:", error);
      });
  } else {
    // Create new product
    axios.post('/products', product.value)
      .then(() => {
        router.push('/products');
      })
      .catch(error => {
        console.error("Error creating product:", error);
      });
  }
};

const handleDelete = () => {
  // Delete product
  axios.delete(`/products/${product.value.id}`)
    .then(() => {
      router.push('/products');
    })
    .catch(error => {
      console.error("Error deleting product:", error);
    });
};
</script>
