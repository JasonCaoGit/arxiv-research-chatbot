export const flashcards = [
  {
    id: 1,
    title: "Vision Transformer (ViT) - Core Concept",
    question: "What is the main innovation of the Vision Transformer (ViT)?",
    answer: "ViT applies a pure Transformer architecture directly to sequences of image patches, without using convolutional layers, showing that CNNs are not necessary for strong vision performance."
  },
  {
    id: 2,
    title: "Vision Transformer (ViT) - How It Works",
    question: "How does ViT process an image?",
    answer: "ViT splits an image into fixed-size patches (e.g., 16x16), flattens them into vectors, adds position embeddings, and processes the sequence with standard Transformer encoder architecture."
  },
  {
    id: 3,
    title: "Vision Transformer (ViT) - Performance",
    question: "What was ViT's performance compared to CNNs?",
    answer: "When pre-trained on large datasets, ViT outperforms state-of-the-art CNNs on image classification tasks while requiring fewer computational resources for training."
  },
  {
    id: 4,
    title: "Vision Transformer (ViT) - Limitation",
    question: "What is a key limitation of the original Vision Transformer?",
    answer: "The original ViT requires large amounts of pre-training data to perform well, as it lacks the inductive biases of CNNs that help with smaller datasets."
  },
  {
    id: 5,
    title: "Swin Transformer - Core Concept",
    question: "What is the main innovation of the Swin Transformer?",
    answer: "Swin Transformer introduces a hierarchical architecture that computes representations with shifted windows, allowing for greater efficiency and linear computational complexity with respect to image size."
  },
  {
    id: 6,
    title: "Swin Transformer - Window Mechanism",
    question: "How do shifted windows work in Swin Transformer?",
    answer: "Swin Transformer limits self-attention computation to non-overlapping local windows, then shifts the window partitioning in subsequent layers to create connections between windows, efficiently enabling cross-window information exchange."
  },
  {
    id: 7,
    title: "Swin Transformer - Versatility",
    question: "What makes Swin Transformer more versatile than ViT?",
    answer: "Swin's hierarchical design creates multi-scale feature maps like CNNs, making it suitable not just for image classification but also dense prediction tasks like object detection and semantic segmentation."
  },
  {
    id: 8,
    title: "Swin Transformer - Performance",
    question: "How did Swin Transformer perform on vision tasks?",
    answer: "Swin Transformer achieved state-of-the-art performance across multiple vision tasks, including +2.7 box AP and +2.6 mask AP on COCO object detection, and +3.2 mIoU on ADE20K semantic segmentation compared to previous models."
  },
  {
    id: 9,
    title: "Computer Vision Transformers - Trend",
    question: "What trend do ViT and Swin Transformer represent in computer vision?",
    answer: "They represent a shift from CNN-dominated architectures to Transformer-based models in computer vision, showing that self-attention mechanisms can be effectively adapted from NLP to vision tasks."
  },
  {
    id: 10,
    title: "Computer Vision Transformers - Efficiency",
    question: "How do Vision Transformers address the efficiency challenge with high-resolution images?",
    answer: "ViT uses patch-based processing to reduce sequence length, while Swin uses windowed attention mechanisms that scale linearly with image size rather than quadratically as in standard self-attention."
  }
];