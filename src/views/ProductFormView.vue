<template>
  <div>
    <h1>{{ isEditing ? 'Modifier' : 'Créer' }} un produit</h1>
    <ProductForm />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'; // Assurez-vous que le chemin d'importation est correct

export default {
  components: {
    ProductForm
  },
  data() {
    return {
      isEditing: false // Vous pouvez utiliser cette variable pour déterminer si vous éditez un produit existant ou en créez un nouveau
    };
  }
};
</script>
