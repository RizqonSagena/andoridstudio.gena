import ProductCard from "@/components/product-card";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReusablePage (){
    return (
        <SafeAreaView>
            <ProductCard/>
        </SafeAreaView>
    )
}