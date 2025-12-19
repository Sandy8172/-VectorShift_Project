---

# VectorShift Frontend Technical Assessment

**Author:** Sandeep Singh
**Submission:** `Sandeep_Singh_technical_assessment.zip`
**Screen Recording:** `Sandeep_Singh_screenrecording.mp4`

---

## 📌 Overview

This project is a solution to the **VectorShift Frontend Technical Assessment**.
It demonstrates frontend architecture design, UI/UX improvements, dynamic node behavior, and backend integration using a React + FastAPI stack.

The final application allows users to visually build a pipeline of nodes, submit it to a backend service, and receive real-time feedback about the structure and validity of the pipeline.

---

## 🛠 Tech Stack

### Frontend

* **React**
* **React Flow**
* **Tailwind CSS**
* **Zustand** (state management)

### Backend

* **Python**
* **FastAPI**
* **NetworkX** (graph analysis)

---

## 🧩 Features Implemented

### Part 1: Node Abstraction

* Created a reusable `BaseNode` component to eliminate duplication across node types.
* Standardized layout, styling, and handle rendering.
* Added five new node types to demonstrate extensibility:

  * Number Node
  * Boolean Node
  * Condition Node
  * API Node
  * Logger Node

**Benefits:**

* Faster node creation
* Centralized styling
* Improved maintainability

---

### Part 2: Styling

* Applied a unified, modern UI design using Tailwind CSS.
* Consistent node appearance:

  * Card-based layout
  * Rounded corners
  * Subtle shadows
  * Clear headers
* Styled inputs, selects, and handles for better usability.

---

### Part 3: Enhanced Text Node Logic

The Text Node was significantly improved with:

#### ✅ Auto-Resizing

* Node width and height dynamically grow as the user types.
* Improved visibility for longer text.

#### ✅ Variable Parsing & Dynamic Handles

* Supports variables using double curly braces:

  ```
  {{input}}
  {{userName}}
  ```
* Each valid variable creates a **new input handle** on the left side of the node.
* Variable detection uses a JavaScript-safe regex and avoids duplicates.

This behavior closely mirrors the VectorShift Text Node experience.

---

### Part 4: Backend Integration

* Frontend submits the pipeline’s **nodes and edges** to the backend.
* Backend calculates:

  * Total number of nodes
  * Total number of edges
  * Whether the pipeline forms a **Directed Acyclic Graph (DAG)**

#### DAG Validation

A DAG ensures:

* No circular dependencies
* A valid execution order for the pipeline

The backend responds with:

```json
{
  "num_nodes": 6,
  "num_edges": 5,
  "is_dag": true
}
```

The frontend displays this information in a user-friendly alert after submission.

---

## 🚀 How to Run the Project

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
python -m pip install fastapi uvicorn networkx
python -m uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

## 🧪 Usage Instructions

1. Open the frontend in the browser
2. Create nodes and connect them to form a pipeline
3. Use the **Text Node** to define variables using `{{variableName}}`
4. Click **Submit**
5. View the alert showing:

   * Number of nodes
   * Number of edges
   * Whether the pipeline is a DAG

---

## 🎥 Screen Recording

A walkthrough video is included demonstrating:

* Node abstraction
* Styling
* Text Node behavior
* Backend integration
* DAG validation

**File name:**
`Sandeep_Singh_screenrecording.mp4`

---

## 📦 Submission Files

* `Sandeep_Singh_technical_assessment.zip`
* `Sandeep_Singh_screenrecording.mp4`

---

## ✅ Notes

* The project avoids unnecessary complexity while focusing on clarity, extensibility, and correctness.
* Design and architectural decisions were made with scalability and maintainability in mind.
* All requirements outlined in the assessment instructions have been fully implemented.

---

Thank you for reviewing my submission. I look forward to discussing the project and design decisions further!

— **Sandeep Singh**

---
