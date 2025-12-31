// pages/blog32.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog32 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "tldr", title: "TL;DR" },
    { id: "what-is", title: "What Is Computer Vision?" },
    //{ id: "how-works", title: "How Computer Vision Works" },
    { id: "data-collection", title: "Data Collection" },
    { id: "preprocessing", title: "Preprocessing" },
    { id: "model-selection", title: "Model Selection" },
    { id: "model-training", title: "Model Training" },
    //{ id: "cv-tasks", title: "Computer Vision Tasks" },
    { id: "applications", title: "Computer Vision Applications" },
    { id: "tools", title: "Computer Vision Tools" },
    //{ id: "history", title: "A Brief History" },
    //{ id: "conclusion", title: "Conclusion" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-secondary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 flex gap-8">

        {/* LEFT SIDEBAR - TABLE OF CONTENTS */}
        <div className="hidden lg:block w-64 sticky top-24 h-fit">
          <div className="bg-secondary backdrop-blur-sm rounded-xl border border-primary/60 p-6 shadow-glow">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
              <FiList className="mr-2" />
              Table of Contents
            </h3>
            <nav
              className="space-y-2 max-h-[85vh] overflow-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tocItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-secondary/20 text-primary border-l-4 border-primary"
                      : "text-primary hover:text-primary/80 hover:bg-secondary/10"
                  }`}
                >
                  {index + 1}. {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* MOBILE TOC TOGGLE */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="lg:hidden fixed top-24 left-4 z-50 bg-secondary text-primary p-3 rounded-full shadow-lg"
        >
          <FiList size={20} />
        </button>

        {/* MOBILE TOC OVERLAY */}
        {isTocOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-secondary/50" onClick={() => setIsTocOpen(false)}>
            <div className="bg-secondary w-80 h-full overflow-y-auto p-6 shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                <FiList className="mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tocItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsTocOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-primary/20 text-primary border-l-4 border-primary"
                        : "text-primary hover:text-primary/80 hover:bg-primary/5"
                    }`}
                  >
                    {index + 1}. {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-4xl">
          {/* TITLE */}
          <h1 className="text-5xl font-extrabold text-primary mb-8 drop-shadow-glow">
            Computer Vision: How Machines Learn to See
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog2.jpg"
              alt="Computer Vision Technology"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              K
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>22 September 2025</span>
            </div>
          </div>

          {/* SECTION: TL;DR */}
          <section id="tldr" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">TL;DR</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Computer vision enables machines to understand images and videos using machine learning algorithms. The workflow involves data collection, preprocessing, model selection, and training. CNNs extract features through convolution and pooling layers, while transformers are gaining popularity for image tasks.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Computer vision powers numerous applications from medical diagnosis and autonomous vehicles to retail automation and robotics. Popular tools include TensorFlow, PyTorch, OpenCV, and Keras. As data quality and models improve, vision systems continue to become more accurate and widespread in daily life.
            </p>
          </section>

          {/* SECTION: What Is Computer Vision? */}
          <section id="what-is" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">1. What Is Computer Vision?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Computer vision is an area of AI that enables machines to visually understand images and videos, using machine learning algorithms that find insightful information in visual data. In summary, this is at least a three-tier process: what is in it (recognition), what does the 3D shape look like, and how do the things relate to each other.
            </p>
          </section>

          {/* SECTION: How Computer Vision Works */}
          <section id="how-works" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">2. How Computer Vision Works</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              A common example is the detection of pneumonia using chest X-rays. The reading of X-rays is usually slow and at times difficult for doctors since signs are subtle. In this case, a computer vision system may assist by learning from many labeled X-rays and proposing likely diagnoses.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">Typical workflow:</p>
            <div className="bg-secondary/40 rounded-lg p-6 border border-primary/20 mb-4">
              <ol className="space-y-2 text-primary/80">
                <li>1. Data collection</li>
                <li>2. Preprocessing</li>
                <li>3. Model selection</li>
                <li>4. Model training</li>
              </ol>
            </div>
          </section>

          {/* SECTION: Data Collection */}
          <section id="data-collection" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Data Collection</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              First you collect images or video for the task. For medical tasks, hospitals can use past X-rays labeled as "normal" or "pneumonia". For other problems you might use camera or sensor feeds. Public datasets such as COCO, ImageNet and Open Images also help, providing many labeled images to train models.
            </p>
          </section>

          {/* SECTION: Preprocessing */}
          <section id="preprocessing" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Preprocessing</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Models are as good as the data they're trained on. Preprocessing sanitizes and perfects images—say, changing brightness, resizing, smoothing, or removing noise. The datasets need to be large and diverse, so the models generalize well.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              You can increase size and variety through a technique called data augmentation: rotate, flip, crop, and change contrast. In medical imaging, simple transforms—like small rotations—help the model learn the same condition from slightly different angles.
            </p>
          </section>

          {/* SECTION: Model Selection */}
          <section id="model-selection" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Model Selection</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Choosing the right model affects both speed and accuracy. CNNs are still widely used for image tasks, but RNNs help when image frames are sequential, like in video. Recently, transformer-based models (especially ViT) have become popular. They divide an image into patches, treat them like tokens, and apply a self-attention mechanism across patches. They often match or beat CNNs on tasks such as image classification.
            </p>
          </section>

          {/* SECTION: Model Training */}
          <section id="model-training" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Model Training</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Training includes running the selected model on labeled data, estimating the errors, and tuning the parameters for better performance. A typical CNN consists of convolution layers that enable feature extraction, pooling layers to reduce size, and fully connected layers that enable final classification.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Feature Extraction</h3>
                <p className="text-primary/80 leading-relaxed">
                  Filters or kernels slide over the image, performing dot products with pixel values to produce feature maps. Each filter would respond to patterns such as edges, shapes, or textures. For X-rays, these could be cloudy areas, fluid pockets, or irregular contours of the lungs.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Pooling</h3>
                <p className="text-primary/80 leading-relaxed">
                  After convolution, pooling reduces the size of the feature map by taking maximum or average values in regions. This retains the most salient signals and reduces computation.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Forward Pass and Loss</h3>
                <p className="text-primary/80 leading-relaxed">
                  The model predicts outputs in a forward pass. A loss function measures the error between prediction and true label.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Backpropagation and Optimization</h3>
                <p className="text-primary/80 leading-relaxed">
                  Backpropagation computes the gradients of the loss w.r.t. each weight. Optimizers such as gradient descent update the weights with the goal of reducing the loss over time.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Final Output</h3>
                <p className="text-primary/80 leading-relaxed">
                  The fully connected layer provides class probabilities. For a chest X-ray, it could give the probability of pneumonia; if above a certain threshold, it flags the image for review.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Computer Vision Tasks */}
          <section id="cv-tasks" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Computer Vision Tasks</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Different tasks that involve computer vision include:
            </p>

            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Image Recognition</h3>
                <p className="text-primary/80 leading-relaxed">
                  That is the broad idea of finding and naming objects, people, places or text in an image. It underlies many other tasks like classification and detection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Image Classification</h3>
                <p className="text-primary/80 leading-relaxed">
                  Classification assigns a label either to the entire image or to objects within it. The pneumonia X-ray example is a classic example of image classification; the model decides whether an X-ray shows pneumonia or not.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Object Detection</h3>
                <p className="text-primary/80 leading-relaxed mb-2">
                  Object detection finds where the objects are in an image and labels them; it combines localization—which is drawing bounding boxes—with classification. Examples include traffic footage systems that can detect and locate cars, bikes, and pedestrians.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  The popular models for detection include the R-CNN (two-stage detector) and YOLO (single-stage, real-time detector). For video detection, transformer models are often mixed with RNNs to handle time sequences, such as LSTMs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Image Segmentation</h3>
                <p className="text-primary/80 leading-relaxed mb-2">
                  Segmentation labels each pixel in the image. It gives finer detail than detection by drawing exact shapes and boundaries. Types include:
                </p>
                <ul className="list-disc ml-6 text-primary/80 space-y-1 mb-2">
                  <li>Semantic segmentation: label each pixel with a class, not distinguishing instances (e.g., "road," "car")</li>
                  <li>Instance segmentation: Label pixels for each object instance separately</li>
                  <li>Panoptic segmentation: This combines semantic and instance segmentation to provide a full view of the scene</li>
                </ul>
                <p className="text-primary/80 leading-relaxed">
                  Segmentation is useful when objects are fragmented or exacting boundaries are important, to identify organ shapes in medical images.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Object Tracking</h3>
                <p className="text-primary/80 leading-relaxed">
                  Tracking involves establishing feature correspondence between object identities across video frames. Applications include surveillance, sports analytics, and driver-assist systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Scene Understanding</h3>
                <p className="text-primary/80 leading-relaxed">
                  Scene understanding goes beyond the identification of objects; it infers relations and events. Graph neural networks model spatial relationships between objects, such as a car in front of a taxi. VLMs combine image understanding with text to describe scenes in context.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Facial Recognition</h3>
                <p className="text-primary/80 leading-relaxed">
                  It analyzes facial geometry and patterns of the face, including eye distance, the shape of the nose, and the jawline to identify individuals. Facial recognition is used in the unlocking of devices and in security systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Pose Estimation</h3>
                <p className="text-primary/80 leading-relaxed">
                  Estimating pose provides the position of body parts with respect to body gestures and motion. Applications include sports analysis, gaming, and robot operation, for example, by keeping a robotic arm in proper alignment with objects in space.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Optical Character Recognition (OCR)</h3>
                <p className="text-primary/80 leading-relaxed">
                  OCR extracts text from scanned pages or images and converts it into machine-readable text. Image acquisition commonly takes place along with preprocessing like deskewing, and character or word recognition. Modern CNNs and transformers increase accuracy in character and word recognition for OCR.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Image Generation</h3>
                <p className="text-primary/80 leading-relaxed mb-2">
                  Generative models create new images. Common types are:
                </p>
                <ul className="list-disc ml-6 text-primary/80 space-y-1 mb-2">
                  <li>Diffusion models: learn to remove noise from images to generate new samples</li>
                  <li>GANs: These consist of a generative adversarial network where a generator creates images and a discriminator tries to tell real from fake. They train together</li>
                  <li>Variational autoencoders: compress and reconstruct images to produce variations</li>
                </ul>
                <p className="text-white/80 leading-relaxed">
                  These models can also generate images from text descriptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Visual Inspection</h3>
                <p className="text-white/80 leading-relaxed">
                  Computer vision inspects items for defects, spots corrosion, or finds faulty parts in manufacturing and infrastructure. It helps detect issues with much greater precision and speed through segmentation and detection.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Applications */}
          <section id="applications" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Computer Vision Applications</h2>
            <p className="text-white/80 leading-relaxed mb-4">Practical applications include:</p>

            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Agriculture</h3>
                <p className="text-white/80 leading-relaxed">
                  Drones and cameras capture images of crops. Vision models analyze plant health, spot pests, and guide targeted treatments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Autonomous Vehicles</h3>
                <p className="text-white/80 leading-relaxed">
                  Self-driving cars combine cameras with lidar, radar, and sensors. The entire vision tasks of detection, segmentation, and scene understanding assist the car to navigate safely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Healthcare</h3>
                <p className="text-white/80 leading-relaxed">
                  Imaging for medical diagnosis employs mainly detection and segmentation to identify the markers of diseases from X-rays, CT scans, and MRIs. These tools support diagnosis and treatment planning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Manufacturing</h3>
                <p className="text-white/80 leading-relaxed">
                  Automatic vision systems track inventory, scan items, and check product quality faster and more consistently than manual inspection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Retail and E-commerce</h3>
                <p className="text-white/80 leading-relaxed">
                  Systems like Amazon's Just Walk Out rely on vision for tracking of items taken by customers, while augmented reality and pose estimation enable virtual try-ons for clothes and eyewear.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Robotics</h3>
                <p className="text-white/80 leading-relaxed">
                  Robots use vision in navigation, picking and placing of objects, and safely interacting with people and the environment.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Tools */}
          <section id="tools" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Computer Vision Tools</h2>
            <p className="text-white/80 leading-relaxed mb-4">Popular tools and libraries include:</p>

            <div className="space-y-4 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Keras</h3>
                <p className="text-white/80 leading-relaxed">
                  Keras is a simple deep learning API that runs on top of frameworks like TensorFlow or PyTorch. It includes a variety of tutorials and examples dealing with images.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">OpenCV</h3>
                <p className="text-white/80 leading-relaxed">
                  OpenCV is a general library of open-source image processing, comprising a great number of filtering, detection, and video analysis algorithms. It contains Python, Java, and C++ bindings.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Scikit-image</h3>
                <p className="text-white/80 leading-relaxed">
                  Scikit-image is a Python package with easy-to-use image processing functions useful for preprocessing and simple feature extraction.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">TensorFlow</h3>
                <p className="text-white/80 leading-relaxed">
                  TensorFlow is a general deep learning platform from Google. It contains tools and datasets that can be used for image classification, segmentation, and detection.
                </p>
              </div>

              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Torchvision</h3>
                <p className="text-white/80 leading-relaxed">
                  Torchvision is a part of PyTorch and includes common image transforms, datasets, and prebuilt models for vision tasks.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: History */}
          <section id="history" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. A Brief History of Computer Vision</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision started in the 1950s and the 1960s. Early experiments with animals revealed that they detect simple shapes, like lines, first. At the same time, computers gained ways to scan and digitize images. Over decades, methods evolved from simple shape detection through modern neural networks, which can recognize complex scenes and generate images.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Computer vision converts visual data from images and video into useful information. From medical image analysis to self-driving cars, computer vision solves many applications by harnessing data, preprocessing, model choice, and training. Thus, as the quality of data and models improves, vision systems are getting both more accurate and much more pervasive in daily life.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog32;
