<template>
  <component :is="icon" />
</template>

<script setup>  
import { 
  ref, 
  onMounted 
} from 'vue';
import * as icons from 'lucide-vue-next';  

const props = defineProps({
  name: {  
    type: String,  
    required: true,  
    default: ''  
  }  
});  
  
const name = ref(props.name);  
const icon = ref(null);  
  
const loadIcon = () => {  
  if (!name.value || !icons[name.value]) {  
    console.error(`Invalid icon name: ${name.value}`);  
    return;  
  }  
  icon.value = icons[name.value];  
};  
  
onMounted(() => {  
  loadIcon();  
});  
</script>