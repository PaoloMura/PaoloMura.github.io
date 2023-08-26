"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[547],{6547:function(e,t,i){i.r(t);var n=i(2592),r=i(184);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"This project was the coursework for my third year Computer Graphics unit. The task was to build a rendering engine from the ground up using C++ and strictly limited to SDL's basic functionality (drawing a pixel onto a window)."}),(0,r.jsx)("p",{children:"My solution was able to parse the OBJ and MTL files that contained information on the 3D model's vertices, faces and colours. The OBJ file specified where in 3D space each vertex of the object was."}),(0,r.jsx)(n.Z,{fluid:!0,src:"/images/rendering-engine/PointProjection.jpeg"}),(0,r.jsx)("p",{children:"Consider a virtual camera looking towards the object with a virtual 2D screen in between them. In my first rasterised approach, I cast 'rays' from each vertex to the camera to find the intersetion point with the screen."}),(0,r.jsx)(n.Z,{fluid:!0,src:"/images/rendering-engine/RasterisedTriangles.jpeg"}),(0,r.jsx)("p",{children:"From here, my engine drew lines between the vertices and then filled the triangles in that made up each face. At this point I also added functionality for camera movement. This used matrix multiplication to change the direction the camera was positioned and oriented with respect to the 3D model. Another feature was texture mapping, which takes in an image file and maps pixels from the image to the triangle rather than just using one solid colour."}),(0,r.jsx)(n.Z,{fluid:!0,src:"/images/rendering-engine/RasterisedRender.jpeg"}),(0,r.jsx)("p",{children:"The second approach I used was ray-tracing. Unlike before, this casts rays from the camera into the scene, checking to see if it intersects with a point on the object. If so, it then casts a ray from that point to a light source. Various factors such as the proximity to the light source and angle of incidence of the light ray affect the brightness of the corresponding pixel that gets drawn on the screen."}),(0,r.jsx)(n.Z,{fluid:!0,src:"/images/rendering-engine/RayTracing.jpeg"}),(0,r.jsx)("p",{children:"The use of ray tracing allowed me to implement logic for more complex rendering such as mirrored surfaces and Gouraud and Phong shading for spherical objects."}),(0,r.jsx)(n.Z,{fluid:!0,src:"/images/rendering-engine/RayTraced.jpeg"})]})}}}]);
//# sourceMappingURL=547.82321b01.chunk.js.map