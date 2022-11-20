import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { OrderForm } from "../../Forms/OrderForm";
import { Buttom } from "../Buttom";
import { Background } from "./styles";

export function NewOrder() {
    const bottomSheetRef = useRef<BottomSheetModal>(null!);

    function handleSnapPress() {
        bottomSheetRef.current.present();
    }

    return (
        <>
            <Buttom title="Novo chamado" onPress={handleSnapPress} />

            <BottomSheetModalProvider>
                <BottomSheetModal
                    style={{ padding: 24 }}
                    enablePanDownToClose={true}
                    snapPoints={["50%"]}
                    ref={bottomSheetRef}
                    backgroundComponent={() => <Background />}
                >
                    <OrderForm />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </>
    )
}