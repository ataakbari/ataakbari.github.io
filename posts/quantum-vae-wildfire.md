# Quantum-Compatible VAE for Wildfire Detection

**Date:** November 2024 | **Reading Time:** 12 min

**Tags:** VAE, RBM, Computer Vision, Quantum Annealing

---

## Introduction

Wildfire detection from satellite imagery is a critical application of computer vision that can save lives and property. Traditional deep learning approaches have shown promising results, but the emergence of quantum computing offers new opportunities to enhance these models. In this post, I'll share insights from my research on developing quantum-compatible variational autoencoders (VAEs) for wildfire detection using Restricted Boltzmann Machines (RBMs) trained with quantum-inspired optimization.

This work was published in **IGARSS 2022 and 2023** and represents a practical approach to preparing machine learning models for near-term quantum hardware.

## The Challenge: Making Deep Learning Quantum-Ready

Modern convolutional neural networks excel at image segmentation tasks, but they're fundamentally incompatible with current quantum hardware architectures. The key challenges include:

- **Continuous vs. Discrete:** Classical neural networks operate with continuous-valued weights, while many quantum algorithms work best with discrete or binary formulations
- **Architecture Mismatch:** Deep convolutional architectures don't map naturally to quantum circuit representations
- **Training Paradigm:** Backpropagation through quantum circuits is non-trivial and often requires specialized techniques

## Our Approach: Quantum-Compatible Architecture

### 1. Variational Autoencoder Framework

We start with a VAE architecture that performs image-to-image translation from satellite RGB imagery to binary wildfire segmentation masks. The VAE objective combines reconstruction loss with KL divergence:

$$\mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(y|z)] - \beta \cdot D_{KL}(q_\phi(z|x) || p(z))$$

Where $x$ is the input satellite image, $y$ is the segmentation mask, and $z$ is the latent representation. The $\beta$ parameter controls the tradeoff between reconstruction quality and latent space regularity.

### 2. Restricted Boltzmann Machines as Building Blocks

The key innovation is replacing portions of the encoder/decoder with RBMs. RBMs are energy-based models with a natural quantum interpretation:

$$E(v, h) = -\sum_i a_i v_i - \sum_j b_j h_j - \sum_{i,j} v_i W_{ij} h_j$$

This energy function maps directly to quantum Ising Hamiltonians, making RBMs ideal candidates for quantum implementation. The probability of a visible-hidden state configuration is:

$$P(v, h) = \frac{e^{-E(v,h)}}{Z}$$

where $Z$ is the partition function.

### 3. Quantum-Inspired Training with Simulated Annealing

Instead of using contrastive divergence (CD), we train the RBMs using simulated annealing and parallel tempering. This approach:

- Generates better samples from the model distribution
- Avoids local optima that trap CD-based training
- Mimics the behavior of quantum annealing hardware
- Can be directly replaced with actual quantum annealing when hardware scales

> **Key Insight:** By using simulated annealing during training, we're preparing the model for eventual deployment on quantum annealers like D-Wave systems. The classical simulation helps us validate the approach while quantum hardware continues to mature.

## Implementation Details

### Architecture Design

Our hybrid architecture consists of:

1. **CNN Encoder:** Extracts spatial features from satellite imagery
2. **RBM Latent Layer:** Learns a quantum-compatible latent representation
3. **Sampling Layer:** Performs variational sampling using parallel tempering
4. **RBM Decoder Layer:** Maps latent codes back to image space
5. **CNN Decoder:** Refines the segmentation mask

### Training Strategy

We developed a two-stage training approach:

1. **Warm-up:** Train the full network end-to-end with standard backpropagation
2. **Quantum-Compatible Training:** Fix CNN layers and fine-tune RBMs using simulated annealing with parallel tempering across multiple temperature chains

### Optimization with PySA

We leveraged **PySA** (Python Simulated Annealing), an open-source NASA tool I co-developed, for efficient simulated annealing. PySA provides:

- Native Python implementation with JIT compilation
- Parallel tempering with adaptive temperature schedules
- Interface compatible with quantum annealing APIs

## Results and Performance

### Quantitative Metrics

Our quantum-compatible VAE achieved competitive performance on wildfire segmentation:

- **IoU (Intersection over Union):** 0.78 on test set
- **F1-Score:** 0.82 for wildfire class detection
- **Uncertainty Quantification:** Well-calibrated predictive distributions through ensemble sampling

### Quantum-Readiness

The model demonstrates several quantum-ready properties:

- RBM weights can be mapped to QUBO (Quadratic Unconstrained Binary Optimization) formulations
- Sampling operations have direct quantum annealing counterparts
- Energy landscape is compatible with adiabatic quantum computation

> **Current Limitations:** While theoretically quantum-compatible, practical deployment on current quantum hardware faces challenges including limited qubit connectivity, short coherence times, and restricted problem sizes. Our approach positions the model for future quantum advantage as hardware improves.

## Lessons Learned

### 1. Hybrid Architectures Are Essential

Pure quantum approaches struggle with the high-dimensional nature of satellite imagery. Hybrid architectures that leverage classical CNNs for feature extraction and quantum components for latent space modeling offer the best of both worlds.

### 2. Training Stability Requires Careful Tuning

Simulated annealing introduces stochasticity that can destabilize training. We found that:

- Adaptive cooling schedules improve convergence
- Parallel tempering with 8-12 temperature chains provides good exploration
- Gradient clipping is essential when mixing backprop with annealing-based updates

### 3. Energy-Based Models Need Special Care

Working with energy-based models like RBMs requires monitoring partition function estimates and ensuring proper normalization. We used annealed importance sampling for partition function estimation.

## Future Directions

This research opens several exciting avenues:

- **Hardware Deployment:** Testing on actual quantum annealers as problem sizes become feasible
- **Variational Quantum Circuits:** Exploring gate-based quantum computing as an alternative to annealing
- **Multi-Modal Learning:** Extending to multi-modal satellite data (SAR, thermal, etc.)
- **Foundation Models:** Investigating quantum-compatible components in large-scale foundation models like Prithvi

## Conclusion

Quantum-compatible machine learning is still in its early stages, but approaches like the one described here demonstrate that we can build practical systems that bridge classical and quantum computing paradigms. As quantum hardware continues to improve, models designed with quantum compatibility in mind will be positioned to leverage these advances.

The key is to design architectures that are useful today with classical hardware while maintaining a clear path to quantum enhancement in the future.

## References & Related Work

- Akbari Asanjan, A., et al. (2023). "Quantum-Assisted Variational Segmentation for Image-to-Image Wildfire Detection Using Satellite Data." _IGARSS 2023_.
- Akbari Asanjan, A., et al. (2022). "Quantum-Compatible Variational Segmentation for Image-to-Image Wildfire Detection Using Satellite Data." _IGARSS 2022_.
- Mandrà, S., Akbari Asanjan, A., et al. (2022). "PySA: Fast Simulated Annealing in Native Python." [GitHub](https://github.com/nasa/PySA)

---

**About the Author:** Ata Akbari Asanjan is a Senior ML Engineer at NASA Ames Research Center, where he leads research in quantum machine learning, foundation models, and Earth observation systems. He holds a Ph.D. in Engineering from UC Irvine and an MIT Quantum Computing Fundamentals Certificate.
