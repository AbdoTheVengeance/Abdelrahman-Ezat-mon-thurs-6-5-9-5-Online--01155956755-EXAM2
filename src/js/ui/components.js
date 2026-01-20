export const UI = {
  loader: `
    <div class="flex items-center justify-center py-12 col-span-full">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>
  `,

  emptyState: `
    <div class="flex flex-col items-center justify-center py-12 text-center col-span-full">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
      </div>
      <p class="text-gray-500 text-lg">No results found</p>
    </div>
  `,

  createCategoryCard: (cat) => `
    <div
      class="category-card bg-white rounded-xl p-3 border border-gray-100 hover:border-emerald-400 cursor-pointer transition-all shadow-sm group"
      data-category="${cat.strCategory}"
    >
      <div class="flex items-center gap-2.5">
        <div class="text-emerald-600 w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <h3 class="text-sm font-bold text-gray-900">${cat.strCategory}</h3>
      </div>
    </div>
  `,

  createRecipeCard: (meal) => `
    <div
      class="recipe-card flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
      data-id="${meal.idMeal}"
    >
      <div class="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src="${meal.strMealThumb}"
          alt="${meal.strMeal}"
          loading="lazy"
        />
        <div class="absolute bottom-3 left-3">
          <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold rounded-full text-gray-700 uppercase tracking-wider">
            ${meal.strCategory || "Recipe"}
          </span>
        </div>
      </div>

      <div class="p-4 flex flex-col flex-1">
        <h3 class="text-sm font-bold text-gray-900 mb-1 line-clamp-2 h-10 group-hover:text-emerald-600 transition-colors">
          ${meal.strMeal}
        </h3>

        <div class="flex items-center justify-between mt-auto pt-2">
          <span class="text-[10px] font-semibold text-gray-500 uppercase">
            <i class="fa-solid fa-globe text-blue-400 mr-1"></i>
            ${meal.strArea || "Global"}
          </span>
          <span class="text-[10px] font-bold text-emerald-600">View Details</span>
        </div>
      </div>
    </div>
  `,

  createProductCard: (p) => {
    const calories = p.nutriments?.["energy-kcal_100g"] || 0;
    const protein = p.nutriments?.protein_100g || 0;
    const carbs = p.nutriments?.carbohydrates_100g || 0;
    const fat = p.nutriments?.fat_100g || 0;

    return `
      <div class="product-card flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
        <div class="relative h-44 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
          <img
            src="${p.image_url || "https://placehold.co/200x200?text=No+Image"}"
            class="max-w-full max-h-full object-contain mix-blend-multiply"
            loading="lazy"
          />
          ${
            p.nutrition_grades
              ? `<div class="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase shadow-sm">Score ${p.nutrition_grades}</div>`
              : ""
          }
        </div>

        <div class="p-4 flex flex-col flex-1">
          <p class="text-[10px] text-emerald-600 font-bold mb-1 uppercase tracking-tighter truncate">
            ${p.brands || "Unknown Brand"}
          </p>

          <h3 class="text-xs font-bold text-gray-900 mb-3 line-clamp-2 h-8">
            ${p.product_name || "Unnamed Product"}
          </h3>

          <div class="grid grid-cols-2 gap-2 mb-4">
            <div class="bg-gray-50 p-1.5 rounded text-center">
              <p class="text-[10px] font-bold text-gray-900">${Math.round(calories)} kcal</p>
              <p class="text-[8px] text-gray-500 uppercase">Energy</p>
            </div>

            <div class="bg-gray-50 p-1.5 rounded text-center">
              <p class="text-[10px] font-bold text-gray-900">${Math.round(protein)}g</p>
              <p class="text-[8px] text-gray-500 uppercase">Protein</p>
            </div>
          </div>

          <button
            class="log-item-btn mt-auto w-full bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
            data-name="${p.product_name}"
            data-cal="${calories}"
            data-pro="${protein}"
            data-carb="${carbs}"
            data-fat="${fat}"
          >
            Add to Log
          </button>
        </div>
      </div>
    `;
  },
};
