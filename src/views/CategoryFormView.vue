<template>
  <div>
    <h1>{{ isEditing ? 'Modifier' : 'Créer' }} une catégorie</h1>
    <CategoryForm />
  </div>
</template>

<script>
import CategoryForm from '@/components/CategoryForm.vue'; // Assurez-vous que le chemin d'importation est correct

export default {
  components: {
    CategoryForm
  },
  data() {
    return {
      isEditing: false // Vous pouvez utiliser cette variable pour déterminer si vous éditez une catégorie existante ou en créez une nouvelle
    };
  }
};
</script>
