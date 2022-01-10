let fx = [
  65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65,
  65, 65, 65, 65, 65, 65, 65, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 63,
  63, 63, 63, 63, 63, 63, 63, 63, 62, 62, 62, 62, 61, 61, 61, 61, 61, 61, 61,
  61, 61, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
  61, 61, 62, 62, 62, 63, 64, 64, 65, 65, 66, 67, 67, 68, 68, 69, 70, 70, 71,
  71, 72, 73, 73, 74, 75, 76, 77, 79, 79, 80, 82, 83, 84, 84, 86, 87, 88, 89,
  90, 92, 93, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
  107, 108, 109, 110, 112, 112, 113, 114, 115, 116, 117, 117, 118, 119, 119,
  120, 121, 121, 121, 122, 123, 123, 123, 124, 124, 124, 125, 125, 125, 125,
  126, 126, 126, 126,
];
let fy = [
  213, 213, 212, 211, 210, 209, 208, 205, 204, 203, 201, 199, 198, 196, 195,
  193, 191, 190, 188, 187, 185, 182, 181, 179, 178, 176, 175, 173, 171, 170,
  168, 167, 164, 162, 160, 153, 151, 150, 147, 146, 144, 141, 140, 138, 137,
  135, 133, 132, 130, 129, 126, 124, 123, 121, 120, 118, 117, 116, 115, 113,
  112, 112, 111, 110, 109, 108, 108, 107, 106, 106, 105, 105, 104, 104, 103,
  102, 102, 101, 100, 99, 98, 97, 97, 96, 95, 94, 94, 93, 92, 91, 90, 89, 88,
  88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 77, 76, 76, 75, 74, 74, 73,
  73, 73, 72, 72, 72, 72, 71, 71, 71, 71, 71, 71, 71, 70, 70, 70, 70, 70, 69,
  69, 69, 69, 69, 69, 68, 68, 68, 68, 68, 68, 67, 67, 67, 67, 67, 67, 67, 67,
  66, 66, 66, 66, 66, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65,
];
let fx2 = [
  64, 65, 65, 67, 69, 70, 71, 73, 77, 78, 82, 86, 86, 88, 90, 91, 92, 93, 95,
  96, 98, 99, 99, 100, 100, 101, 101, 102, 102, 102, 102, 103, 104, 104, 105,
  105, 106, 107, 107, 107, 107, 108, 109, 109, 110, 111, 111, 112, 113, 113,
  114, 114, 115, 115, 116, 116, 117, 118, 118, 119, 119, 119, 120, 120, 120,
  121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 124, 124,
  124, 125, 125, 125, 125, 125, 124,
];
let fy2 = [
  138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 137, 136, 136, 136, 136,
  136, 136, 136, 136, 136, 135, 135, 135, 135, 135, 135, 135, 135, 135, 134,
  134, 134, 134, 134, 134, 133, 133, 133, 133, 133, 133, 133, 133, 133, 132,
  132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132,
  132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132,
  132, 132, 132, 132, 132, 132, 132, 132, 132, 131, 130, 128,
];

let ox = [
  139, 139, 138, 132, 130, 129, 128, 128, 127, 126, 125, 125, 124, 124, 124,
  124, 123, 122, 122, 122, 119, 119, 118, 117, 117, 116, 116, 116, 116, 116,
  116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 117, 118, 119, 120, 122,
  123, 125, 126, 127, 128, 131, 132, 133, 135, 136, 137, 139, 139, 140, 142,
  143, 145, 147, 150, 150, 152, 154, 155, 158, 159, 161, 162, 163, 164, 166,
  167, 168, 169, 169, 170, 170, 172, 173, 173, 174, 175, 176, 177, 178, 178,
  179, 179, 180, 180, 180, 181, 181, 182, 182, 183, 183, 184, 184, 185, 185,
  185, 186, 186, 187, 187, 187, 187, 187, 187, 188, 188, 188, 188, 188, 188,
  188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188,
  188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188,
  187, 187, 187, 186, 186, 186, 185, 185, 185, 185, 184, 184, 183, 183, 182,
  181, 180, 180, 178, 178, 178, 177, 176, 176, 175, 174, 174, 173, 173, 172,
  171, 171, 169, 169, 168, 167, 167, 165, 164, 163, 162, 162, 161, 161, 160,
  160, 159, 159, 158, 157, 156, 156, 155, 154, 152, 151, 150, 149, 148, 147,
  147, 146, 146, 146, 145, 145, 145, 145, 144, 144, 144, 143, 143, 143, 143,
  142, 142, 142, 141, 141, 141, 140, 140, 140, 139, 139, 139, 139, 138, 138,
  138, 137, 137, 136, 135, 135, 134, 134, 133, 133, 133, 132, 132,
];
let oy = [
  200, 200, 199, 189, 188, 186, 185, 183, 182, 178, 177, 176, 174, 174, 173,
  170, 169, 163, 161, 160, 147, 139, 137, 127, 122, 120, 115, 113, 109, 107,
  103, 102, 97, 96, 94, 93, 93, 91, 90, 89, 86, 85, 83, 82, 78, 77, 74, 72, 70,
  69, 65, 64, 63, 61, 59, 58, 57, 56, 54, 53, 52, 51, 50, 49, 49, 49, 48, 48,
  48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 49, 49, 50, 51, 51, 52, 53, 54, 55,
  57, 58, 59, 60, 60, 61, 62, 63, 65, 65, 66, 68, 69, 70, 71, 74, 76, 78, 80,
  82, 84, 87, 87, 89, 90, 91, 92, 93, 94, 95, 96, 97, 97, 98, 100, 101, 102,
  104, 106, 108, 111, 113, 115, 116, 118, 119, 120, 122, 124, 125, 126, 128,
  129, 131, 133, 135, 136, 140, 140, 142, 144, 145, 148, 151, 152, 153, 155,
  156, 157, 157, 158, 159, 160, 161, 161, 162, 162, 163, 165, 165, 166, 168,
  169, 169, 170, 170, 171, 172, 173, 173, 174, 175, 175, 176, 177, 179, 179,
  180, 180, 181, 182, 183, 184, 184, 185, 185, 185, 186, 186, 186, 186, 187,
  187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 188, 188,
  188, 188, 188, 188, 188, 188, 188, 189, 189, 189, 189, 189, 189, 189, 189,
  189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189,
  189, 189, 190, 190, 190, 190, 190, 190, 190,
];

let ox2 = [
  215, 214, 214, 214, 213, 211, 210, 209, 203, 200, 199, 197, 196, 194, 194,
  193, 191, 190, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189,
  189, 191, 194, 196, 197, 200, 203, 207, 208, 210, 212, 214, 216, 218, 220,
  223, 225, 226, 228, 229, 231, 232, 234, 235, 236, 238, 239, 240, 242, 244,
  246, 248, 249, 251, 252, 254, 256, 257, 259, 260, 261, 263, 264, 266, 267,
  268, 269, 270, 271, 272, 273, 274, 276, 277, 279, 279, 281, 281, 282, 283,
  284, 284, 285, 285, 286, 286, 287, 287, 288, 288, 289, 289, 289, 290, 290,
  290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290,
  290, 290, 290, 290, 290, 290, 289, 289, 289, 288, 287, 287, 287, 286, 286,
  286, 286, 285, 285, 284, 284, 283, 282, 282, 281, 281, 280, 279, 279, 278,
  278, 278, 277, 276, 276, 276, 275, 274, 273, 272, 272, 271, 270, 270, 269,
  268, 266, 265, 264, 262, 261, 260, 259, 259, 258, 257, 257, 255, 254, 253,
  252, 252, 251, 250, 249, 248, 246, 246, 245, 243, 242, 241, 240, 238, 237,
  237, 236, 235, 234, 234, 233, 233, 232, 231, 231, 230, 230, 229, 228, 228,
  228, 226, 226, 225, 224, 224, 224, 223, 223, 223, 222, 222, 222, 222, 221,
  221, 221, 220, 220, 220, 219, 219, 218, 218, 218, 217, 217, 217, 217, 216,
  216, 216, 215, 214, 214, 214, 213, 213, 213, 212, 212, 212, 211, 211, 211,
  211,
];
let oy2 = [
  123, 123, 123, 124, 124, 128, 129, 131, 138, 144, 146, 150, 152, 157, 157,
  160, 165, 171, 176, 177, 182, 184, 185, 189, 190, 192, 193, 195, 199, 201,
  202, 208, 212, 216, 219, 222, 227, 233, 234, 237, 239, 242, 244, 246, 248,
  250, 251, 253, 254, 255, 256, 257, 258, 258, 259, 259, 259, 259, 260, 260,
  260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 259, 259, 258, 258,
  257, 256, 256, 255, 254, 254, 252, 250, 248, 245, 244, 242, 241, 239, 238,
  236, 235, 233, 232, 230, 228, 227, 226, 224, 223, 222, 221, 220, 219, 217,
  215, 214, 213, 212, 212, 211, 210, 208, 208, 207, 206, 205, 203, 203, 202,
  201, 199, 198, 198, 195, 193, 191, 190, 187, 185, 184, 183, 181, 180, 179,
  177, 177, 176, 173, 172, 171, 168, 167, 166, 165, 163, 162, 160, 159, 158,
  157, 157, 156, 155, 155, 154, 153, 152, 152, 151, 151, 150, 150, 149, 149,
  148, 147, 146, 145, 144, 144, 144, 143, 143, 142, 142, 142, 141, 140, 140,
  139, 139, 139, 138, 138, 137, 137, 136, 136, 135, 135, 134, 133, 133, 133,
  133, 133, 132, 132, 132, 131, 131, 131, 131, 131, 131, 131, 130, 130, 130,
  130, 130, 130, 130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129,
  129, 129, 129, 128, 128, 128, 128, 128, 128, 128, 127, 127, 127, 127, 127,
  127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
  127,
];

let tx1 = [
  58, 58, 60, 64, 65, 68, 72, 76, 83, 88, 95, 100, 103, 108, 115, 122, 127, 138,
  145, 152, 157, 161, 171, 174, 179, 184, 190, 193, 197, 200, 204, 206, 207,
  208, 208, 209, 210, 210, 210, 210, 210, 210, 210,
];
let ty2 = [
  198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198,
  198, 198, 198, 198, 198, 198, 198, 196, 196, 196, 195, 194, 194, 193, 193,
  193, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 189, 187,
];

let tx2 = [
  308, 308, 308, 308, 308, 308, 308, 308, 308, 308, 308, 308, 308, 308, 308,
  308, 308, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309,
  309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309, 309,
  309, 309, 309, 309, 309, 309, 308,
];
let ty2 = [
  73, 74, 76, 77, 79, 81, 85, 92, 95, 109, 113, 116, 120, 124, 128, 133, 137,
  150, 153, 164, 166, 173, 175, 180, 182, 187, 188, 191, 192, 193, 193, 193,
  194, 194, 194, 195, 195, 196, 196, 198, 198, 199, 200, 200, 201, 201, 201,
  202, 202, 202, 200, 197,
];